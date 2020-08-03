import React, { Component } from "react";
import Home from "../view/Home/Home";
import Query from "../view/Query";
import ShowCalendar from "../view/ShowCalendar";
import Pay from "../view/Pay";
import City from "../view/City";
import Ticket from "../view/Ticket";
import TheaterList from "../view/TheaterList";
import Mapp from "../view/Map";
import { Route, Redirect, Switch } from "react-router-dom";
import "./index";
import Mine from "../view/mine/index";
import MyOrder from "../view/mine/myorderlist/myorderlist";
import Address from "../view/mine/myaddress/myaddress";
import Aaddress from "../view/mine/myaddress/Add.address";
import Register from "../view/mine/register/register";
import Login from "../view/mine/login/login";
import Mysecurity from "../view/mine/mysecurity/mysecurity";
import MyAccountInfo from "../view/mine/myAccountInfo/myAccountInfo";
import Cardproduct from "../view/mine/Cardproduct/Cardproduct";
export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/query" component={Query} />
          <Route path="/showcalendar" component={ShowCalendar} />
          <Route path="/pay" component={Pay} />
          <Route path="/city" component={City} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/theaterlist" component={TheaterList} />
          <Route path="/map" component={Mapp} />
          {/*  */}
          <Route path="/mine" component={Mine}></Route>
          <Route path="/order" component={MyOrder}></Route>
          <Route path="/address" component={Address}></Route>
          <Route path="/ADDaddress" component={Aaddress}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/mysecurity" component={Mysecurity}></Route>
          <Route path="/myAccountInfo" component={MyAccountInfo}></Route>
          <Route path="/Cardproduct" component={Cardproduct}></Route>

          {/*  */}
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </div>
    );
  }
}
