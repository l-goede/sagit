import express from 'express';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

const router = express.Router();

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
    `https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${name}`,
    {
      headers: {
        'accept-language': 'en-US',
      },
    }
  );
  //   const rawHtml = await response.text();
  //   const $ = cheerio.load(rawHtml);
  //   const price = $('.offerList-item-priceMin');

  //   console.log(price);
  // }

  const rawHTML = await response.text();
  const $ = cheerio.load(rawHTML);

  const offerListItems = $('.offerList-item');
  const products: {
    title: string;
    price: string;
  }[] = [];
  offerListItems.each((_i, offerListItem) => {
    const title = $(offerListItem)
      .find('.offerList-item-description-title')
      .text();
    const price = $(offerListItem).find('.offerList-item-priceMin').text();
    products.push({
      title: title,
      price: price,
    });
    console.log(title);
  });
  return products;
}
