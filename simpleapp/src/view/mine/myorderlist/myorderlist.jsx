import React, { Component } from 'react'
import HeaderBar from '../../../component/mine/headerbar'
import styled from 'styled-components'

import { order } from '../../../api/get'
const Order = styled.div`
  height: 100%;
  background-color: #f5f5f5;

  li {
    margin-bottom: 0.32rem;
    .show {
      background-color: #fefefe;
      padding: 0.66667rem 0.4rem 0.4rem;
      .show_item {
        display: flex;
        justify-content: space-between;
        .left {
          font-size: 0.32rem;
          color: #666666;
          max-width: 6.16rem;
          .name {
            font-size: 0.35rem;
            color: #242424;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            display: -webkit-box;
          }
          .date {
            padding: 0.66667rem 0 0.26667rem;
          }
          .city {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .right {
          text-align: right;
          p {
            font-size: 0.37333rem;
            color: #242424;
            margin-bottom: 0.4rem;
          }
          div {
            display: flex;
            align-items: center;
            width: 1.6rem;
            height: 2.16rem;
            border: 1px solid #ebebeb;
            border-radius: 0.10667rem;
            overflow: hidden;
            img {
              width: 100%;
              height: auto;
              border-radius: 0.10667rem;
            }
          }
        }
      }
    }
    .bar {
      background-color: white;
      display: flex;
      padding: 0.33333rem 0;
      border-top: 1px solid #ebebeb;

      color: #666666;
      font-size: 0.34667rem;

      .left {
        display: inline-block;
        color: #242424;
        font-size: 0.42667rem;
        font-weight: 400;
        vertical-align: middle;
        margin-left: 0.7rem;
      }
      span {
        display: inline-block;
        font-size: 0.4rem;
        margin-left: 0.06667rem;
        margin-right: 0.06667rem;
      }
      .num {
        font-size: 0.4rem;
        display: inline-block;
      }
    }
  }
`
export default class balance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderlist: [],
    }
  }

  render() {
    return (
      <Order>
        <HeaderBar>我的订单</HeaderBar>
        <div>
          <ul>
            {this.state.orderlist.map((item) => {
              return (
                <li key={item.order_sn}>
                  <div>
                    <div className="show">
                      <div className="show_item">
                        <div className="left">
                          <p className="name">{item.showname}</p>
                          <p className="date">{item.display_time}</p>
                          <p className="city">
                            {item.venue_info.city} | {item.venue_info.name}
                          </p>
                        </div>
                        <div className="right">
                          <p>已取消</p>
                          <div>
                            <img src={item.pic} alt="聚橙网" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bar">
                      <div className="left">{item.ticket_amount}</div>
                      <span>|</span>
                      <div className="num">{item.totalnums}</div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Order>
    )
  }
  componentDidMount() {
    this.getorderlist()
  }
  async getorderlist() {
    let res = await order()
    console.log(res)
    this.setState({
      orderlist: res.data.data.list,
    })
  }
}
