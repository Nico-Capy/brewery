import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../src/pages/home'));
const About = lazy(() => import('../src/pages/about'));
const Contact = lazy(() => import('../src/pages/contact'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterRoutes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </RouterRoutes>
    </Suspense>
  );
};

export default Routes;
