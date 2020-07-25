import React, { Component } from "react";
import HomeIndexCss from "../../css/wyb/HomeIndex.module.css";
import HotConcer from "../../component/IndexBottom/HotConcer";
import Recommend from "../../component/IndexBottom/Recommend";
import Swiper from "../../component/wyb/Swiper";
import Typelist from "../../component/wyb/Tpyelist";
import HomeTop from "../../component/ccy/homeTop";
export default class Index extends Component {
  render() {
    return (
      <>
        {/* 首页的城市，模糊查询，日历部分 */}
        <HomeTop {...this.props}></HomeTop>
        <div className={HomeIndexCss.container}>
          <div className={HomeIndexCss.swiper}>
            <Swiper />
            <Typelist />
            {/* 热门演出、演唱会、展览休闲、儿童剧 */}
            <HotConcer></HotConcer>
            {/* 为你推荐 */}
            <Recommend></Recommend>
          </div>
        </div>
      </>
    );
  }
}
