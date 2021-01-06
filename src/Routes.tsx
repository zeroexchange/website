import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AboutUsPage from './pages/AboutUs';
import Header from './layout/Header';
import HomePage from './pages/Home';
import LearnMorePage from './pages/LearnMore';
import React from 'react';
import ScrollToTop from './shared/components/ScrollToTop';

export enum PublicRoutes {
  Home = '/',
  LearnMore = '/learn-more',
  Contact = '/contact',
  AboutUs = '/about-us',
}

export default function Routes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path={PublicRoutes.Home}>
          <HomePage />
        </Route>
        <Route path={PublicRoutes.LearnMore}>
          <LearnMorePage />
        </Route>
        <Route path={PublicRoutes.AboutUs}>
          <AboutUsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
