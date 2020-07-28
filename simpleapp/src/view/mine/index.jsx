import React, { Component } from 'react'
import { MineContainer } from './indexstyle'
import { withRouter } from 'react-router-dom'
import hoc from '../../component/mine/hoc'
class index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    return (
      <MineContainer>
        <div className="top">
          <i onClick={() => this.props.history.push('/mysecurity')}>*</i>
          <div className="main">
            <div className="head">
              <div className="pic">
                <img
                  alt=""
                  src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"
                />
              </div>
              <span onClick={() => this.props.history.push('/login')}>
                橙子
              </span>
              <span>id：2222</span>
            </div>
            <div className="label">
              <p>普通会员</p>
            </div>
            <div className="cnt">
              <div className="item">
                <p className="num">0</p>
                <p className="name">账户余额</p>
              </div>
              <div className="item">
                <p className="num">0</p>
                <p className="name">积分</p>
              </div>
              <div className="item">
                <p className="num">0</p>
                <p className="name">优惠券</p>
              </div>
              <a href="https://m.juooo.com/plus/index">
                <p>立即开通</p> <p>橙PLUS卡</p>
              </a>
            </div>
          </div>
        </div>

        <a href="https://m.juooo.com/shop/vip/buy" className="vip">
          <img src="https://m.juooo.com/static/img/ad.411f5e6.png" alt="" />
        </a>

        <div className="setting">
          <ul>
            <li onClick={() => this.props.history.push('/order')}>
              <div>
                <i></i>
                <p>我的订单</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>我的票夹</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p onClick={() => this.props.history.push('/Cardproduct')}>
                  我的卡包
                </p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div>
                <i></i>
                <p>实名购票人</p>
              </div>
            </li>
            <li onClick={() => this.props.history.push('/address')}>
              <div>
                <i></i>
                <p>收货地址</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>意见反馈</p>
              </div>
            </li>
            <li>
              <div>
                <i></i>
                <p>客服帮助</p>
              </div>
            </li>
          </ul>
        </div>
      </MineContainer>
    )
  }
}

export default withRouter(index)
