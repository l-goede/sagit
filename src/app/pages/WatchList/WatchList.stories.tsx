import React from 'react';
import WatchList from './WatchList';

export default {
  title: 'Page/WatchList',
  component: WatchList,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Watch = (): JSX.Element => <WatchList />;
