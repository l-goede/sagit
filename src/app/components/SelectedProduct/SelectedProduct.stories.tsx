import React from 'react';
import SelectedProduct from './SelectedProduct';

export default {
  title: 'Component/SelectedProduct',
  component: SelectedProduct,
};

export const Select = (): JSX.Element => (
  <SelectedProduct
    product={{
      id: '',
      image:
        'https://appletoolbox.com/wp-content/uploads/2019/10/Airpods-pro-3.jpg',
      title: 'Apple Airpods Pro',
      price: 'ab 187 €',
    }}
  />
);
