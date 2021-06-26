import React from 'react';
import ResultProducts from './ResultProducts';

export default {
  title: 'Component/ResultProducts',
  component: ResultProducts,
};

export const ResultAirpods = (): JSX.Element => (
  <ResultProducts
    icon={<NotificationIcon />}
    id="Hi"
    image="https://cdn.idealo.com/folder/Product/6837/6/68376…/s1_produktbild_mittelgross/apple-airpods-pro.jpg"
    title="Apple Airpods 2. Generation"
    offers="83 Angebote"
    price="ab 148 €"
  />
);

// export const ResultIphone = (): JSX.Element => (
//   <ResultProducts
//     image="https://cdn.idealo.com/folder/Product/3039/6/3039679/s1_produktbild_mittelgross/apple-iphone-4s.jpg"
//     title="Apple iPhone 4"
//     offers="44 Angebote"
//     price="ab 327 €"
//   />
// );
