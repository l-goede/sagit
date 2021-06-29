import React from 'react';
import PriceInput from './PriceInput';

export default {
  title: 'Page/PriceInput',
  component: PriceInput,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Search = (): JSX.Element => (
  <PriceInput
    product={{
      id: '',
      image:
        'https://appletoolbox.com/wp-content/uploads/2019/10/Airpods-pro-3.jpg',
      title: 'Apple Airpods Pro',
      price: 'ab 187 €',
    }}
  />
);
