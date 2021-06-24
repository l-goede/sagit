import React from 'react';
import ResultProducts from './ResultProducts';

export default {
  title: 'Component/ResultProducts',
  component: ResultProducts,
};

export const ResultAirpods = (): JSX.Element => (
  <ResultProducts
    imgSrc="https://appletoolbox.com/wp-content/uploads/2019/10/Airpods-pro-3.jpg"
    title="Apple Airpods 2. Generation"
    vendor="ebay"
    price="ab 148 €"
  />
);

export const ResultIphone = (): JSX.Element => (
  <ResultProducts
    imgSrc="https://www.investireoggi.it/tech/wp-content/uploads/sites/14/2014/02/iphone4s.jpg"
    title="Apple iPhone 4"
    vendor="Amazon"
    price="ab 327 €"
  />
);
