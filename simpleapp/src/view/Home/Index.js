import React, { Component } from 'react'
import HomeIndexCss from "../../css/wyb/HomeIndex.module.css"
import HotConcer from "../../component/IndexBottom/HotConcer"
import Recommend from "../../component/IndexBottom/Recommend"
import Swiper from "../../component/wyb/Swiper"
import Typelist from "../../component/wyb/Tpyelist"
export default class Index extends Component {
    render() {
        return (
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
        )
    }
}
