import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect from="/" to="" exact></Redirect>
          <Route children={<h1>404</h1>}></Route>
        </Switch>
      </div>
    );
  }
}
