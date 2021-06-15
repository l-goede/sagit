import express from 'express';
import fetch from 'node-fetch';
import domParser from 'dom-parser';

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
    `https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${name}`
  );
  const rawHtml = await response.text();

  const parser = new domParser();
  const dom = parser.parseFromString(rawHtml);
  const price = dom.getElementsByClassName('myofferList-item-priceMin');
  const product = { name: name, producer: 'tba', price: price };
  const products = [product];
  return products;
}
