import React, { Component } from "react";
import HomeBottom from "../../component/HomeBottom";
import HomeCss from "../../css/wyb/Home.module.css";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import Index from "./Index";
import Theater from "./Theater";
import Lol from "./Lol";
import Personal from "./Personal";
export default class Home extends Component {
  render() {
      let {path}=this.props.match
    // console.log(this.props);
    return (
      <div>
        <Switch>
          <Route path={path+"/index"} component={Index} />
          <Route path={path+"/theater"} component={Theater} />
          <Route path={path+"/lol"} component={Lol} />
          <Route path={path+"/personal"} component={Personal} />
          <Redirect from={path} to={path+"/index"}></Redirect>
        </Switch>
        <div className={HomeCss.HomeBottom}>
          <HomeBottom />
        </div>
      </div>
    );
  }
}
