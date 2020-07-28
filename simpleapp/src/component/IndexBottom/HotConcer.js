import React, { Component } from 'react'
import { show, singsong, exhibition, exhibitiontop, child, singsongtop } from "../../api"
import Swiper from "swiper";
import "swiper/css/swiper.css"
import style from "../../css/indexShow/HotConcer.module.css"
export default class HotConcer extends Component {
    constructor() {
        super()
        this.state = {
            shows: [],
            singsongs: [],
            singsongstop: [],
            exhibitions: [],
            exhibitionstop: [],
            children: [],
        }
    }
    //更新阶段
    componentDidUpdate() {
        // 热门演出
        new Swiper(this.refs.swiper, {
            direction: 'horizontal',//横向轮播
            loop: false,
            grabCursor: true,
            slidesPerView: 4,
            spaceBetween: 10,
        })
        // 演唱会
        new Swiper(this.refs.swiper1, {
            direction: 'horizontal',//横向轮播
            loop: false,
            grabCursor: true,
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
        })
        // 展览休闲
        new Swiper(this.refs.swiper2, {
            direction: 'horizontal',//横向轮播
            loop: false,
            grabCursor: true,
            slidesPerView: 2,
            spaceBetween: 10,
            slidesOffsetBefore: -170,
            effect: 'coverflow',
            centeredSlides: true,
            coverflowEffect: {
                rotate: 20,
                stretch: 10,
                depth: 30,
                modifier: 2,
                // slideShadows: true
            }
        })

        // 儿童剧
        new Swiper(this.refs.swiper3, {
            direction: 'horizontal',//横向轮播
            loop: false,
            grabCursor: true,
            slidesPerView: 4,
            spaceBetween: 10,
        })
    }
    componentDidMount() {
        // 热门演出
        show().then(({ data }) => {
            this.setState({
                shows: data
            })
        })
        // 演唱会
        singsong().then(({ data }) => {
            this.setState({
                singsongs: data
            })
        })
        // 演唱会上部
        singsongtop().then(({ data }) => {
            console.log(data);

            this.setState({
                singsongstop: data
            })
        })
        // 展览休闲
        exhibition().then(({ data }) => {
            this.setState({
                exhibitions: data
            })
        })
        // 展览休闲上部
        exhibitiontop().then(({ data }) => {
            this.setState({
                exhibitionstop: data
            })
        })
        // 儿童剧
        child().then(({ data }) => {
            this.setState({
                children: data
            })
        })
    }
    render() {
        let { shows, singsongs, exhibitions, exhibitionstop, singsongstop, children } = this.state
        return (
            <div className={style.indexlist}>
                {/* 热门演出 */}
                <div className={style.hot}>
                    <div className={style.title}>
                        <div className={style.title_l}>
                            <h2>热门演出</h2>
                        </div>
                        <div className="title-r">
                            <span>全部 &nbsp;></span>
                        </div>
                    </div>
                    <div className="swiper-container" ref="swiper" id={style.s_container}>
                        <div className="swiper-wrapper">
                            {
                                shows.length && shows.map((item, index) => <div key={index} className="swiper-slide">
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                {/* 演唱会 */}
                <div className={style.hot}>
                    <div className={style.title}>
                        <div className={style.title_l}>
                            <h2>演唱会</h2>
                        </div>
                        <div className="title-r">
                            <span> &nbsp;></span>
                        </div>
                    </div>
                    {/* 演唱会上部 */}
                    {
                        singsongstop.length && singsongstop.map((item, index) => {
                            return <div key={index} className={style.singtop1}>
                                <div className={style.sing_l}>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={style.sing_r}>
                                    <p><span>{item.date}</span><i>{item.week}</i><i>{item.time}</i></p>
                                    <p>{item.text}</p>
                                    <p><span>{item.city}</span>|<span>{item.theatername}</span></p>
                                </div>
                            </div>
                        })
                    }
                    <div className="swiper-container" ref="swiper1" id={style.sw_container}>
                        <div className="swiper-wrapper">
                            {
                                singsongs.length && singsongs.map((item, index) => <div key={index} className="swiper-slide">
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                    <p><em>{item.money}</em>起</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                {/* 展览休闲 */}
                <div className={style.hot}>
                    <div className={style.title}>
                        <div className={style.title_l}>
                            <h2>展览休闲</h2>
                        </div>
                        <div className="title-r">
                            <span> &nbsp;></span>
                        </div>
                    </div>
                    {/* 展览休闲上部 */}
                    {
                        exhibitionstop.length && exhibitionstop.map((item, index) => {
                            return <div key={index} className={style.singtop1, style.exhibition}>
                                <div className={style.sing_l}>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={style.sing_r}>
                                    <p><span>{item.date}</span><i>{item.week}</i><i>{item.time}</i></p>
                                    <p>{item.text}</p>
                                    <p><span>{item.city}</span>|<span>{item.theatername}</span></p>
                                </div>
                            </div>
                        })
                    }
                    <div className="swiper-container" ref="swiper2" id={style.swi_container}>
                        <div className="swiper-wrapper">
                            {
                                exhibitions.length && exhibitions.map((item, index) => <div key={index} className="swiper-slide">
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                    <p><em>{item.money}</em>起</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                {/* 儿童剧 */}
                <div className={style.hot}>
                    <div className={style.title}>
                        <div className={style.title_l}>
                            <h2>儿童剧</h2>
                        </div>
                        <div className="title-r">
                            <span> &nbsp;></span>
                        </div>
                    </div>
                    {/* 儿童剧上部 */}
                    {
                        singsongstop.length && singsongstop.map((item, index) => {
                            return <div key={index} className={style.singtop1, style.children}>
                                <div className={style.sing_l}>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={style.sing_r}>
                                    <p><span>{item.date}</span><i>{item.week}</i><i>{item.time}</i></p>
                                    <p>{item.text}</p>
                                    <p><span>{item.city}</span>|<span>{item.theatername}</span></p>
                                </div>
                            </div>
                        })
                    }
                    <div className="swiper-container" ref="swiper3" id={style.swip_container}>
                        <div className="swiper-wrapper">
                            {
                                children.length && children.map((item, index) => <div key={index} className="swiper-slide">
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                    <p><em>{item.money}</em>起</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
