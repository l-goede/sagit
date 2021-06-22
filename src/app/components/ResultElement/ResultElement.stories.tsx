import React from 'react';
import ResultElement from './ResultElement';

export default {
  title: 'Component/ResultElement',
  component: ResultElement,
};

export const ResultAirpods = (): JSX.Element => (
  <ResultElement
    imgSrc="https://appletoolbox.com/wp-content/uploads/2019/10/Airpods-pro-3.jpg"
    title="Apple Airpods 2. Generation"
    vendor="ebay"
    price=" ab 148 €"
  />
);

export const ResultIphone = (): JSX.Element => (
  <ResultElement
    imgSrc="https://www.investireoggi.it/tech/wp-content/uploads/sites/14/2014/02/iphone4s.jpg"
    title="Apple iPhone 4"
    vendor="Amazon"
    price=" ab 327 €"
  />
);
