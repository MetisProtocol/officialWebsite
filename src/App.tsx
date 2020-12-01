import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Layout, Header, HeaderItem, Content } from './components/layout';
import Home from './views/home';
import Protocol from './views/protocol';
import Learn from './views/learn';
import Company from './views/company';


export default function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Layout>
        <Header>
          <HeaderItem>
            <NavLink to="/home">
              { t('header.home') }
            </NavLink>
          </HeaderItem>

          <HeaderItem>
            <NavLink to="/protocol">
              { t('header.protocol') }
            </NavLink>
          </HeaderItem>

          <HeaderItem>
            <NavLink to="/learn">
              { t('header.learn') }
            </NavLink>
          </HeaderItem>

          <HeaderItem>
            <NavLink to="/company">
              { t('header.company') }
            </NavLink>
          </HeaderItem>
        </Header>

        <Content>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/protocol">
              <Protocol />
            </Route>

            <Route path="/learn">
              <Learn />
            </Route>

            <Route path="/company">
              <Company />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}
