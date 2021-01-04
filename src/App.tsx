import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout, Header, HeaderItem, Content } from "./components/layout";
import Home from "./views/home";
import MetisWay from "./views/metis_way";
import Learn from "./views/learn";
import Company from "./views/company";

function _ScrollToTop(props: any) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Header>
            <HeaderItem>
              <NavLink to="/" exact>
                {t("header.home")}
              </NavLink>
            </HeaderItem>

            <HeaderItem>
              <NavLink to="/metis_way">{t("header.metis_way")}</NavLink>
            </HeaderItem>

            <HeaderItem>
              <NavLink to="/learn">{t("header.learn")}</NavLink>
            </HeaderItem>

            <HeaderItem>
              <NavLink to="/company">{t("header.company")}</NavLink>
            </HeaderItem>
          </Header>

          <Content>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/metis_way">
                <MetisWay />
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
      </ScrollToTop>
    </Router>
  );
}
