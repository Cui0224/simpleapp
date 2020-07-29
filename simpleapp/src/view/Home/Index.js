import React, { Component } from "react";
import HomeIndexCss from "../../css/wyb/HomeIndex.module.css";
import HotConcer from "../../component/IndexBottom/HotConcer";
import Recommend from "../../component/IndexBottom/Recommend";
import Swiper from "../../component/wyb/Swiper";
import Typelist from "../../component/wyb/Tpyelist";
import HomeTop from "../../component/ccy/homeTop";
export default class Index extends Component {
  componentDidMount() {
    fetch("http://118.190.201.38:8080/juooo/getDetailsById", {
      params: { id: 1 },
      headers: {
        "content-type": "application/json;charset=UTF-8",
        date: "Wed, 29 Jul 2020 06:49:05 GMT",
        "transfer-encoding": "chunked",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  }
  render() {
    return (
      <>
        {/* 首页的城市，模糊查询，日历部分 */}
        <HomeTop {...this.props}></HomeTop>
        <div className={HomeIndexCss.container}>
          <div className={HomeIndexCss.swiper}>
            <Swiper />
          </div>
          <Typelist />
          {/* 热门演出、演唱会、展览休闲、儿童剧 */}
          <HotConcer></HotConcer>
          {/* 为你推荐 */}
          <Recommend></Recommend>
        </div>
      </>
    );
  }
}
