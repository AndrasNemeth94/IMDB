import React, { useState } from "react";
import { I18nProvider, LOCALES } from "./i18n";

import routes from "../src/routes/Routes";
import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideDrawer from "../src/components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "../src/components/Backdrop/Backdrop";

const App = () => {
  const [localeSetting, setLocaleSetting] = useState(LOCALES.HUNGARIAN);
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

  const backdropClickHandler = () => {
    setsideDrawerOpen(false);
  };

  const sideDrawerChanger = () => {
    setsideDrawerOpen((prevDrawer) => !prevDrawer.sideDrawerOpen);
  };
  const getSIdeDrawerandBackdrop = () => {
    return (
      <div>
        <SideDrawer />
        <Backdrop backdropClick={backdropClickHandler} />
      </div>
    );
  };
  const clickOnSetting = () => {
    switch (localeSetting) {
      case LOCALES.HUNGARIAN:
        setLocaleSetting(LOCALES.ENGLISH);
        break;
      case LOCALES.ENGLISH:
        setLocaleSetting(LOCALES.HUNGARIAN);
        break;
      default:
        setLocaleSetting(LOCALES.HUNGARIAN);
    }
  };

  return (
    <div className="App">
      <I18nProvider locale={localeSetting}>
        <div className="app-container">
          <Router>
            <div className="layer-container">
              {sideDrawerOpen ? getSIdeDrawerandBackdrop() : null}
              <Header
                sideDrawerSwitch={sideDrawerChanger}
                clickChangeLang={clickOnSetting}
              />

              <Switch>
                <React.Fragment>
                  {routes.map((el) => {
                    return (
                      <Route
                        key={routes.indexOf(el)}
                        path={el.path}
                        exact
                        component={el.component}
                      />
                    );
                  })}
                </React.Fragment>
              </Switch>

              <Footer />
            </div>
          </Router>
        </div>
      </I18nProvider>
    </div>
  );
};

export default App;
