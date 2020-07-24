import React, { Component } from 'react'
import { recommend } from "../../api/index"
import reStyle from "../../css/indexShow/Recommend.module.css"
export default class Recommend extends Component {
    constructor() {
        super();
        this.state = {
            recommendList: [],
        }
    }
    componentDidMount() {
        // 为你推荐
        recommend().then(({ data }) => {
            this.setState({
                recommendList: data
            })
        })
    }
    render() {
        let { recommendList } = this.state;
        return (
            <div className={reStyle.recommend}>
                <div className={reStyle.re_t}>
                    <h1>为你推荐</h1>
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