import React from 'react';
import PriceInputField from './PriceInputField';

export default {
  title: 'Component/PriceInputField',
  component: PriceInputField,
};

export const PriceInput = (): JSX.Element => (
  <PriceInputField
    label="Dein Wunschpreis"
    value={0}
    placeholder="Zielpreis"
    onChange={console.log}
  />
);
