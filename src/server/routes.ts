import express from 'express';
import fetch from 'node-fetch';
import domParser from 'dom-parser';

const router = express.Router();

router.get('/search', (_req, res) => {
  getData('airpods');
  res.status(200).send('ok');
});

export default router;

async function getData(product: string) {
  fetch(
    `https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${product}`
  )
    .then((res) => res.text())
    .then((rawHtml) => {
      const parser = new domParser();
      const dom = parser.parseFromString(rawHtml);
      const price = dom.getElementsByClassName('myofferList-item-priceMin');
      console.log(price);
    });
}
