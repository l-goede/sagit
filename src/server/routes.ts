import express from 'express';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { readWatchlist, saveWatchlist } from '../utils/productData';

const router = express.Router();

router.get('/products', async (_request, response) => {
  const products = await readWatchlist();
  response.json(products);
});

router.post('/products', async (request, response) => {
  const { product, targetPrice } = request.body;
  await saveWatchlist(product, targetPrice);
  response.send('Product saved in db');
});

router.get('/search', async (req, res) => {
  if (typeof req.query.product !== 'string') {
    res.status(400).send('Query is malformed');
    return;
  }
  const product = await searchProducts(req.query.product);
  res.status(200).send(product);
});

export default router;

async function searchProducts(name: string) {
  const response = await fetch(
    `https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${name}`,
    {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'accept-language': 'en-US',
      },
    }
  );

  const rawHTML = await response.text();
  const $ = cheerio.load(rawHTML);

  const offerListItems = $('.offerList-item');
  const products: {
    id: string;
    image: string;
    title: string;
    description: string;
    price: string;
  }[] = [];
  offerListItems.each((_, offerListItem) => {
    const image = $(offerListItem).find('.offerList-item-image').attr('src');
    const title = $(offerListItem)
      .find('.offerList-item-description-title')
      .text()
      .trim();
    const description = $(offerListItem)
      .find('.description-part-one')
      .text()
      .trim();
    const price = $(offerListItem)
      .find('.offerList-item-priceMin')
      .text()
      .replace('\n', '')
      .trim();
    products.push({
      id: title,
      image: image || '',
      title: title,
      description: description,
      price: price,
    });
  });
  return products;
}
