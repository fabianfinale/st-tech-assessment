import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';

const Routes = ({ setScrollPosition, navbarRef }) => {
  return (
    <Switch>
      <Route exact path='/'>
        <LandingPage
          setScrollPosition={setScrollPosition}
          navbarRef={navbarRef}
        />
      </Route>
      <Route path='/pricing'>
        <PricingPage
          setScrollPosition={setScrollPosition}
          navbarRef={navbarRef}
        />
      </Route>
    </Switch>
  );
};

Routes.propTypes = {
  setScrollPosition: PropTypes.func.isRequired,
  navbarRef: PropTypes.object.isRequired,
};

export default Routes;
