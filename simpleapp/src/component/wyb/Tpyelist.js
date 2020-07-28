import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TypelistCss from "../../css/wyb/HomeIndexTypelist.module.css";
import "../../css/wyb/iconfont1/iconfont.css";
class Tpyelist extends Component {
  render() {
    return (
      <Fragment>
        <div className={TypelistCss.all}>
          <NavLink to="/showcalendar" className={TypelistCss.dan}>
            <span className="iconfont icon-yanchanghui"></span>
            <p>演唱会</p>
          </NavLink>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-yinyue"></span>
            <p>音乐剧</p>
          </div>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-screen-copy"></span>
            <p>舞台剧</p>
          </div>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-ertongjuchang"></span>
            <p>儿童剧</p>
          </div>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-yinlehui28"></span>
            <p>音乐会</p>
          </div>
        </div>
        <div className={TypelistCss.all}>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-shouka"></span>
            <p>聚橙卡</p>
          </div>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-card"></span>
            <p>欢橙卡</p>
          </div>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-zuanshi"></span>
            <p>VIP区</p>
          </div>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-icon-test"></span>
            <p>积分兑换</p>
          </div>
          <div className={TypelistCss.dan}>
            <span className="iconfont icon-duoren"></span>
            <p>拼团</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(Tpyelist);
