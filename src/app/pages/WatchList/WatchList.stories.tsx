import React from 'react';
import Watchlist from './Watchlist';

export default {
  title: 'Page/WatchList',
  component: Watchlist,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Watch = (): JSX.Element => <Watchlist />;
