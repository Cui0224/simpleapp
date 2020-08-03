import React, { Component } from 'react'
import { recommend } from "../../api/index"
import reStyle from "../../css/indexShow/Recommend.module.css"
import BScroll from 'better-scroll'
export default class Recommend extends Component {
    constructor() {
        super();
        this.state = {
            recommendList: [],
            loading: false,
            scroll: "",
            page: 0,
        }
    }
    init = () => {
        const scroll = new BScroll(this.refs.asdf, {
            scrollY: true, //开启竖向滚动
            pullUpLoad: {
                threshold: 100
            }
        })
        scroll.on("pullingUp", () => {
            console.log(123123123123);
            recommend().then(({ data }) => {
                this.setState({
                    recommendList: data,
                    page: this.page + 1
                })
                // .then(scroll.finishPullUp())
            })
            //axios .....   .then(scroll.finishPullUp())
        })
        this.setState({
            scroll
        })
    }
    componentDidMount() {
        // console.log(this.recommend);
        // 为你推荐
        recommend().then(({ data }) => {
            this.setState({
                recommendList: data
            })
            // .then(scroll.finishPullUp())
        })
        // 选中DOM中定义的 .wrapper 进行初始化
        this.init();
    }
    render() {
        let { recommendList } = this.state;
        // console.log(recommendList.length);
        return (
            <div className={reStyle.recommend} ref="asdf">
                <div>
                    <div className={reStyle.re_t}>
                        <h1>为你推荐</h1>
                    </div>
                    <ul className={reStyle.re_b}>
                        {
                            recommendList.length && recommendList.map((item, i) =>
                                <li className={reStyle.re_list} key={i}>
                                    <img src={item.img} alt="" />
                                    <i>{item.city}</i>
                                    <div className={reStyle.recontent}>
                                        <p>{item.hold == "true" ? <span>主办</span> : ""} {item.text}</p>
                                        <p>{item.date}</p>
                                        <p><span>{item.price}</span> &nbsp;起</p>
                                        <p>
                                            {item.tag.length && item.tag.map((value, keys) => <span key={keys}>{value}</span>)}
                                        </p>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <ul className={reStyle.re_b}>
                    {
                        recommendList.length && recommendList.map((item, i) =>
                            <li className={reStyle.re_list} key={i}>
                                <img src={item.img} alt="" />
                                <div className={reStyle.recontent}>
                                    <p>{item.host == "false" ? <span style="background:linear-gradient(right,#FF8F37,#FF5947);borderRadius:10px;color:#fff;">主办</span> : ""} {item.text}</p>
                                    <p>{item.date}</p>
                                    <p><span>{item.price}</span> &nbsp;起</p>
                                    <p>
                                        {item.tag.length && item.tag.map((value, keys) => <span key={keys}>{value}</span>)}
                                    </p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}