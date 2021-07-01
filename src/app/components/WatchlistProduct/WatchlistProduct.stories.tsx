import React from 'react';
import WatchlistProduct from './WatchlistProduct';
export default {
  title: 'Component/ResultProducts',
  component: WatchlistProduct,
};
export const ResultAirpods = (): JSX.Element => (
  <WatchlistProduct
    id=""
    image="https://cdn.idealo.com/folder/Product/6837/6/68376…/s1_produktbild_mittelgross/apple-airpods-pro.jpg"
    title="Apple Airpods 2. Generation"
    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu"
    price="ab 148 €"
    targetPrice={150}
  />
);
export const ResultIphone = (): JSX.Element => (
  <WatchlistProduct
    id=""
    image="https://cdn.idealo.com/folder/Product/3039/6/3039679/s1_produktbild_mittelgross/apple-iphone-4s.jpg"
    title="Apple iPhone 4"
    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu"
    price="ab 327 €"
    targetPrice={320}
  />
);
