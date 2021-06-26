import React from 'react';
import TargetPrice from './TargetPrice';

export default {
  title: 'Component/TargetPrice',
  component: TargetPrice,
};

export const Search = (): JSX.Element => (
  <TargetPrice description="Dein Wunschpreis: " targetPrice="120 €" />
);
