import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderDesktop from './common/components/header/headerDesktop';
import Footer from './common/components/footer/footer';
import HeaderMobile from './common/components/header/headerMobile';
import HomePage from './modules/home/components/homePage';
import {Route, Switch} from 'react-router-dom';
import DetailPage from './modules/content-pages/components/DetailPage';

function App() {
  return (
    <React.Fragment>
      <HeaderDesktop />
      <HeaderMobile />
      {/* <HomePage></HomePage> */}
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/pages">
          <DetailPage></DetailPage>
        </Route>

      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
