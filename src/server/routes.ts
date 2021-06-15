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
        'accept-language': 'de-DE',
      },
    }
  );
  const rawHtml = await response.text();
  const $ = cheerio.load(rawHtml);
  const product = $('.offerList-item-priceMin').text();

  console.log(product);
}
