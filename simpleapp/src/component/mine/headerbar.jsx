import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// import connect from "../../store/connect"
const Headbar = styled.div`
  height: 1.17333rem;
  width: 100%;
  background-color: white;
  font-size: 0.48rem;
  color: #232323;
  position: relative;
  border-bottom: 1px solid #ebebeb;
  z-index: 2;
  box-sizing: border-box;
  i:first-of-type {
    padding: 0.29333rem 0.53333rem 0.29333rem 0.26667rem;
    font-size: 0.48rem;
  }
  span {
    text-align: center;
    height: 1.17333rem;

    line-height: 1.17333rem;
  }
  .show {
    padding-right: 0.2rem;
    font-size: 0.48rem;
    color: red;
    float: right;
  }
  /* 隐藏显示有问题，遮罩层有的话就不能点击了,点击其他部分要隐藏 ，要使用redux*/
  .menu {
    /* display: none; */
    /* width: 375px;
    height: 667px;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1; */
    .content {
      width: 2.5rem;
      position: absolute;
      right: 0.10667rem;
      top: 1.3rem;
      background: rgba(0, 0, 0, 0.5);
      .title {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 0.46667rem;
        width: 100%;
        height: 1.17333rem;
        background: white;
        border-radius: 0.10667rem 0.10667rem 0px 0px;
        border-bottom: 1px solid #f2f2f2;
        p {
          margin-left: 0.4rem;
          font-size: 0.37333rem;
          color: #212121;
        }
      }
    }
  }
`
class headerbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'none',
    }
  }

  render() {
    return (
      <Headbar>
        <i onClick={() => this.props.history.go(-1)}>&lt;</i>
        <span>{this.props.children}</span>
        <span className="show" onClick={this.Show}>
          ...
        </span>
        <div className="menu" style={{ display: this.state.display }}>
          <div className="content">
            <div className="title">
              <p onClick={() => this.props.history.push('/home')}>主页</p>
            </div>
            <div className="title">
              <p onClick={() => this.props.history.push('/mine')}>我的</p>
            </div>
          </div>
        </div>
      </Headbar>
    )
  }
  //点击显示
  Show = () => {
    if (this.state.display === 'none') {
      this.setState({
        display: 'block',
      })
    } else if (this.state.display === 'block') {
      this.setState({
        display: 'none',
      })
    }
  }
}
export default withRouter(headerbar)
