import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
// import '../../../router/index'
import styled from 'styled-components'
const Card = styled.div`
  width: 322px;
  margin: 30px auto;
  position: relative;
  .card {
    height: 170px;
    .cardpic {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .cardname {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: -0.08rem;
      .card1 {
        font-size: 0.53333rem;
        font-weight: bold;
        color: white;
        display: inline-block;
        text-shadow: 0px 0.08rem 0.14667rem rgba(0, 0, 0, 0.1);
      }
      .card2 {
        display: inline-block;
        background: rgba(255, 255, 255, 0.16);
        border-radius: 0.05333rem;
        font-size: 0.26667rem;
        color: #f0f0f0;
        line-height: 0.61333rem;
        padding-top: 1px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 0.8rem;
        height: 0.42667rem;
        line-height: 0.42667rem;
        margin-left: 0.26667rem;
        text-align: center;
      }
    }
    .wrapper {
      position: absolute;
      bottom: 0.22667rem;
      left: 0.4rem;
      right: 0.4rem;
      .limit {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .card3 {
          font-size: 0.66667rem;
          font-weight: bold;
          color: white;
          display: inline-block;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
        }
        .card4 {
          font-size: 0.32rem;
          color: white;
          display: inline-block;
          height: 0.32rem;
          line-height: 0.32rem;
        }
      }
    }
  }
`
class buycard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.save()
  }
  save() {
    let id = this.props.match.params.id

    axios({
      method: 'get',
      url:
        'http://192.168.9.78:8081/live/juooo/myModuleController/getCardInfoById',
      params: {
        cardid: id,
      },
    }).then((res) => {
      console.log(res)
      this.setState({
        list: res.data.data,
      })
    })
  }
  render() {
    let { list } = this.state
    return (
      <Card>
        <div className="card">
          <div className="cardpic">
            <img
              src="https://m.juooo.com/static/img/times-card-bg.png"
              alt=""
            />
          </div>
          <div className="cardname">
            <span className="card1">{list.category}</span>
            <span className="card2">{list.cardname}</span>
          </div>
          <div className="wrapper">
            <div className="limit">
              <span className="card3">{list.deadline}</span>
              <span className="card4">{list.conversion}</span>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
export default withRouter(buycard)
