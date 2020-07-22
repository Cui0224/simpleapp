import React, { Component } from 'react'
import HomeIndexCss from "../../css/wyb/HomeIndex.module.css"
import Swiper from "../../component/Swiper"
export default class Index extends Component {
    render() {
        return (
            <div className={HomeIndexCss.container}>
                <div className={HomeIndexCss.swiper}>
                    <Swiper/>
                </div>
            </div>
        )
    }
}
