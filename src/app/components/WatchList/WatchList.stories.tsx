import React from 'react';
import WatchListHeader from './WatchList';

export default {
  title: 'Component/WatchList',
  component: WatchListHeader,
};

export const WatchList = (): JSX.Element => (
  <WatchListHeader headline="Deine Merkliste" />
);
