import React from 'react';
import PriceInputField from './PriceInputField';

export default {
  title: 'Component/PriceInputField',
  component: PriceInputField,
};

export const PriceInput = (): JSX.Element => (
  <PriceInputField label="Dein Wunschpreis" value="" placeholder="Zielpreis" />
);
