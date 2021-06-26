import React from 'react';
import SaveIcon from '../Icons/SaveIcon';
import SavedProducts from './SavedProducts';

export default {
  title: 'Component/SavedProducts',
  component: SavedProducts,
};

export const SavedAirpods = (): JSX.Element => (
  <SavedProducts
    icon={<SaveIcon />}
    product={{
      id: 'Hi',
      image:
        'https://cdn.idealo.com/folder/Product/6837/6/68376…/s1_produktbild_mittelgross/apple-airpods-pro.jpg',
      title: 'Apple Airpods 2. Generation',
      offers: '83 Angebote',
      price: 'Aktueller Preis: ab 148 €',
      targetPrice: 'Wunschpreis: 120 €',
    }}
  />
);
