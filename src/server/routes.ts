import express from 'express';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { readCredentials, saveCredential } from '../utils/credentials';

const router = express.Router();

router.get('/credentials', async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});

router.post('/credentials', async (request, response) => {
  await saveCredential(request.body);
  response.send('Credential saved in db');
});

router.get('/search', async (req, res) => {
  if (typeof req.query.product !== 'string') {
    res.status(400).send('Query is malformed');
    return;
  }

  const products = await searchProducts(req.query.product);
  res.status(200).send(products);
});

export default router;

async function searchProducts(name: string) {
  const response = await fetch(
    `https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${name}`
  );

  const rawHTML = await response.text();
  const $ = cheerio.load(rawHTML);

  const offerListItems = $('.offerList-item');
  const products: {
    image: string;
    title: string;
    price: string;
  }[] = [];
  offerListItems.each((_i, offerListItem) => {
    const productImg = $(offerListItem).find('.offerList-item-image').text();
    const title = $(offerListItem)
      .find('.offerList-item-description-title')
      .text();
    const price = $(offerListItem).find('.offerList-item-priceMin').text();

    products.push({
      image: productImg,
      title: title,
      price: price,
    });
    console.log(title);
  });
  return products;
}
