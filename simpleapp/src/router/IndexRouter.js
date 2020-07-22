import React, { Component } from "react";
import Home from "../view/Home/Home";
import Query from "../view/Query";
import ShowCalendar from "../view/ShowCalendar";
import Pay from "../view/Pay";
import City from "../view/City";
import Ticket from "../view/Ticket";
import TheaterList from "../view/TheaterList";
import Map from "../view/Map";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
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
          <Route path="/map" component={Map} />
          <Redirect from="/" to="/home"></Redirect>
        </Switch>
      </div>
    );
  }
}
