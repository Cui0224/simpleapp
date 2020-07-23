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
    renderChildren() {
        return this.state.array.map((i, key) => {
            return (
                <div></div>
            );
        }, this);
    }
    getAutoResponsiveProps() {
        return {
            itemMargin: 0
        };
    }
    render() {
        let { recommendList } = this.state;
        return (
            <div className={reStyle.recommend}>
                <div className={reStyle.re_t}>
                    <h1>为你推荐</h1>
                </div>
                <div className={reStyle.re_b}>
                    {
                        recommendList.length && recommendList.map((item, i) => <div className="re_list" key={i}>
                            <img src={item.img} alt="" />
                        </div>)
                    }
                </div>
            </div>
        )
    }
}