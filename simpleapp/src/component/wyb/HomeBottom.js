import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HomeBottomCss from '../../css/wyb/HomeBottom.module.css'
import '../../css/wyb/iconfont/iconfont.css'
import { withRouter } from 'react-router-dom'

class HomeBottom extends Component {
  render() {
    let { path } = this.props.match
    // console.log(this.props);
    return (
      <div className={HomeBottomCss.footer}>
        <NavLink to={path + '/index'}>
          <span className="iconfont icon-shouye"></span>
          <p>首页</p>
        </NavLink>
        <NavLink to={path + '/theater'}>
          <span className="iconfont icon-yingyuan"></span>
          <p>剧院</p>
        </NavLink>
        <NavLink to={path + '/lol'}>
          <span className="iconfont icon-LOL"></span>
          <p>吐了</p>
        </NavLink>
        <NavLink to={path + '/mine'}>
          <span className="iconfont icon-yixianshi_huaban"></span>
          <p>我的</p>
        </NavLink>
      </div>
    )
  }
}
export default withRouter(HomeBottom)
