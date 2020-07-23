import React, { Component } from 'react'
import { show } from "../../api"
import Swiper from "swiper";
import "swiper/css/swiper.css"
import style from "../../css/indexShow/HotConcer.module.css"
export default class HotConcer extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    //更新阶段
    componentDidUpdate() {
        new Swiper(this.refs.swiper, {
            direction: 'horizontal',//横向轮播
            loop: false,
            grabCursor: true,
            slidesPerView: 4,
            spaceBetween: 5,
        })
    }
    componentDidMount() {
        show().then(({ data }) => {
            this.setState({
                list: data
            })
        })
    }
    render() {
        let { list } = this.state
        return (
            <div className={style.hot}>
                <div className={style.title}>
                    <div className={style.title_l}>
                        <h2>热门演出</h2>
                    </div>
                    <div className="title-r">
                        <span>全部 &nbsp;></span>
                    </div>
                </div>
                {/* 热门演出 */}
                <div className="swiper-container" ref="swiper" id={style.s_container}>
                    <div className="swiper-wrapper">
                        {
                            list.length && list.map((item, index) => <div key={index} className="swiper-slide">
                                <img src={item.img} alt="" />
                                <p>{item.text}</p>
                            </div>)
                        }
                    </div>
                </div>
                {/* 演唱会 */}
                <div className="swiper-container" ref="swiper" id={style.sw_container}>
                    <div className="swiper-wrapper">
                        {
                            list.length && list.map((item, index) => <div key={index} className="swiper-slide">
                                <img src={item.img} alt="" />
                                <p>{item.text}</p>
                            </div>)
                        }
                    </div>
                </div>
                {/* 展览休闲 */}
                <div className="swiper-container" ref="swiper" id={style.swi_container}>
                    <div className="swiper-wrapper">
                        {
                            list.length && list.map((item, index) => <div key={index} className="swiper-slide">
                                <img src={item.img} alt="" />
                                <p>{item.text}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
