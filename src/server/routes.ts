import express from 'express';
import fetch from 'node-fetch';
import domParser from 'dom-parser';

const router = express.Router();

router.get('/search', (_req, res) => {
  //   res.status(404).send('Hello World');
  getData('airpods');
  res.status(200).send('ok');
});

export default router;

async function getData(product: string) {
  fetch(
    `https://www.idealo.de/preisvergleich/MainSearchProductCategory.html?q=${product}`
  )
    .then((res) => res.text())
    .then((raw) => {
      const parser = new domParser();
      const dom = parser.parseFromString(raw);
      const elements = dom.getElementsByClassName('myofferList-item-priceMin');
      console.log(elements);
    });
}
