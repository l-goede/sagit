import React from 'react';
import WatchlistHeader from './WatchlistHeader';
export default {
  title: 'Component/WatchlistHeader',
  component: WatchlistHeader,
};
export const Header = (): JSX.Element => (
  <WatchlistHeader headline="Deine Merkliste" />
);
