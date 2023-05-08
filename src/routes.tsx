import { Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('../src/pages/home'));
const About = lazy(() => import('../src/pages/about'));
const Contact = lazy(() => import('../src/pages/contact'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
