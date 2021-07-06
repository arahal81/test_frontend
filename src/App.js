import React, { Component } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import MyFav from "./component/MyFav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/myfav">
              <MyFav />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
