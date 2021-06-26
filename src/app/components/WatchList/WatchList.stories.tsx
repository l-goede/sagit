import React from 'react';
import WatchListHeader from './WatchListHeader';

export default {
  title: 'Component/WatchList',
  component: WatchListHeader,
};

export const WatchList = (): JSX.Element => (
  <WatchListHeader headline="Deine Merkliste" />
);
