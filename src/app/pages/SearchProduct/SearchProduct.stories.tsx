import React from 'react';
import SearchProduct from './SearchProduct';

export default {
  title: 'Page/SearchProduct',
  component: SearchProduct,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Search = (): JSX.Element => <SearchProduct />;
