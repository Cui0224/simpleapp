<<<<<<< HEAD
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Mine from "../view/mine/index";
import MyOrder from "../view/mine/myorderlist/myorderlist";
import Address from "../view/mine/myaddress/myaddress";
import Aaddress from "../view/mine/myaddress/Add.address";
import Register from "../view/mine/register/register";
import Login from "../view/mine/login/login";

import Mysecurity from "../view/mine/mysecurity/mysecurity";
import MyAccountInfo from "../view/mine/myAccountInfo/myAccountInfo";
import List from "../view/mine/test/list";
import Map from "../view/mine/test/Map";
import Swiper from "../view/mine/test/swiper";
import Cardproduct from "../view/mine/Cardproduct/Cardproduct";
import City from "../view/mine/city/city";
=======
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Mine from '../view/mine/index'
import MyOrder from '../view/mine/myorderlist/myorderlist'
import Address from '../view/mine/myaddress/myaddress'
import Aaddress from '../view/mine/myaddress/Add.address'
import Register from '../view/mine/register/register'
import Login from '../view/mine/login/login'

import Mysecurity from '../view/mine/mysecurity/mysecurity'
import MyAccountInfo from '../view/mine/myAccountInfo/myAccountInfo'
import List from '../view/mine/test/list'
import Map from '../view/mine/test/Map'
import Cardproduct from '../view/mine/Cardproduct/Cardproduct'
import City from '../view/mine/city/city'
import BuyCard from '../view/mine/buyCard/buycard'
import Modify from '../view/mine/modify/modify'
>>>>>>> wyy1
export default class index extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/order" component={MyOrder}></Route>
          <Route path="/address" component={Address}></Route>
          <Route path="/ADDaddress" component={Aaddress}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/mysecurity" component={Mysecurity}></Route>
          <Route path="/myAccountInfo" component={MyAccountInfo}></Route>
          <Route path="/Cardproduct" component={Cardproduct}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/map" component={Map}></Route>
<<<<<<< HEAD
          {/* <Route path="/swiper" component={Swiper}></Route> */}

          <Route render={() => <h1>404</h1>}></Route>
        </Switch>
      </div>
    );
=======
          <Route path="/modify" component={Modify}></Route>
          <Route path="/buycard/:id" component={BuyCard}></Route>
          <Route render={() => <h1>404</h1>}></Route>
        </Switch>
      </div>
    )
>>>>>>> wyy1
  }
}
