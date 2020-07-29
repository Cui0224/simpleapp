import React, { Component } from "react";
import HomeBottom from "../../component/wyb/HomeBottom";
import HomeCss from "../../css/wyb/Home.module.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Index from "./Index";
import Theater from "./Theater";
import Lol from "./Lol";
import Mine from "../mine/index";
import axios from "axios";
export default class Home extends Component {
  componentDidMount() {
    axios({
      url: "http://192.168.9.45:8081/live/juooo/getDetailsById",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        id: 1,
      },
    }).then((res) => {
      console.log(1);
      console.log(res);
    });
  }
  render() {
    let { path } = this.props.match;
    return (
      <div>
        <Switch>
          <Route path={path + "/index"} component={Index} />
          <Route path={path + "/theater"} component={Theater} />
          <Route path={path + "/lol"} component={Lol} />
          {/* <Route path={path + "/personal"} component={Personal} /> */}
          <Route path={path + "/mine"} component={Mine} />
          <Redirect from={path} to={path + "/index"}></Redirect>
        </Switch>
        <div className={HomeCss.HomeBottom}>
          <HomeBottom />
        </div>
      </div>
    );
  }
}
