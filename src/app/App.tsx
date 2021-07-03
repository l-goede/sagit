import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import styles from './App.module.css';
import Landing from './pages/Landing/Landing';
import SearchProduct from './pages/SearchProduct/SearchProduct';
import Watchlist from './pages/Watchlist/Watchlist';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: Landing, exact: true },
  { path: '/search', Component: SearchProduct },
  { path: '/watchlist', Component: Watchlist },
];

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
