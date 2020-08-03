import React, { Component } from 'react'
import HeaderBar from '../../../component/mine/headerbar'
import { SettingContainer } from './mysecurity.style'
export default class mysecurity extends Component {
  render() {
    return (
      <div style={({ height: '100%' }, { background: '#f5f5f5' })}>
        <SettingContainer>
          <HeaderBar>设置</HeaderBar>
          <div>
            <div className="content1">
              <div className="pic">
                <img
                  src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"
                  alt=""
                />
              </div>
              <div className="account">
                <p>橙子</p>
                <p>用户：9999</p>
              </div>
              <i
                onClick={() => {
                  this.props.history.push('/myAccountInfo')
                }}
              >
                &gt;
              </i>
            </div>
            <div className="item">
              <p>账号安全</p>
              <i
                onClick={() => {
                  this.props.history.push('/modify')
                }}
              >
                &gt;
              </i>
            </div>
            <div className="item">
              <p>用户协议</p>
              <i>&gt;</i>
            </div>
            <div className="item">
              <p>关于聚橙</p>
              <i>&gt;</i>
            </div>
          </div>
          <div className="btn" onClick={this.exit}>
            <span>退出登录</span>
          </div>
        </SettingContainer>
      </div>
    )
  }
  exit = () => {
    localStorage.removeItem('user')
    this.props.history.push('/login')
  }
}
