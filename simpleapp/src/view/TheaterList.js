import React, { Component } from 'react'
import theater_style from "../css/bl/theaterlist.module.css"
import "../css/bl/iconfont/iconfont.css"
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
export default class ShowCalendar extends Component {
    constructor() {
        super();
        this.state = {
            Theater_Arr: [
                {
                    theaterid: 0,
                    avatar: "https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg",
                    theaterTitle: "南山文体中心",
                    time: 53,
                    address: "深圳",
                    addressDetails: "广东省深圳市南山区南山大道和南头街交汇处",
                    theaterintroduce: "[演出延期]3D科幻舞台剧《三体Ⅱ黑暗森林》-深圳站",
                    showdatatime: "2020.10.10 - 10.11",
                    showPricelist: "180",
                    show_posters:'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg',
                    type:['电子票','可选座','套票','限时9折起']    
                },
                {
                    theaterid: 0,
                    avatar: "https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg",
                    theaterTitle: "南山文体中心",
                    time: 53,
                    address: "深圳",
                    addressDetails: "广东省深圳市南山区南山大道和南头街交汇处",
                    theaterintroduce: "[演出延期]3D科幻舞台剧《三体Ⅱ黑暗森林》-深圳站",
                    showdatatime: "2020.10.10 - 10.11",
                    showPricelist: "180",
                    show_posters:'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg',
                    type:['电子票','可选座']
                },
            ]
        }
    }
    render() {
        const { Theater_Arr } = this.state;
        return (
            <div>

                {/* 头部 */}
                <div className={theater_style.header}>


                    <span className={"iconfont icon-houtui" + " " + theater_style.icontu} onClick={() => {
                        this.props.history.go(-1);
                    }} >
                    </span>
                    <div className={theater_style.smallbox}>
                        <div className={theater_style.toubox}> <img src={"/bl/touxiang.jpg"} width="45px" height="45px" /> </div>
                        <dl>
                            <dt>{Theater_Arr[0].theaterTitle}</dt>
                            <dd>{Theater_Arr[0].time} 场在售演出</dd>
                        </dl>
                    </div>

                    <span className={theater_style.address}>{Theater_Arr[0].address} | {Theater_Arr[0].addressDetails}</span>
                    <NavLink to={"/map"}>
                        <div className={theater_style.dingwei}></div>
                    </NavLink>
                    
                </div>



                {/*热门演出*/}
                <div>
                    <p className={theater_style.hot_title}>热门演出</p>

                    {
                        Theater_Arr.map((item, index) => {
                            return (
                                <NavLink to={"/ticket"}>
                                    <div key={index} className={theater_style.box}>
                                     <img src={item.show_posters} className={theater_style.posters} />
                                    <div>
                                        <ul>
                                            <li className={theater_style.intru}>{item.showdatatime}</li>
                                            <li className={theater_style.intru}>{item.theaterintroduce}</li>
                                            <li>{ 
                                                 item.type.map((v,i)=>(
                                                 <span className={theater_style.active_type}>{v}</span>
                                                 ))   
                                                }</li>
                                            <li className={theater_style.price}>￥{item.showPricelist} <span className={theater_style.qi}>起</span></li>
                                        </ul>
                                    </div>
                                </div>
                                </NavLink>
                               
                            )
                        })

                    }
                    <p className={theater_style.wu}>没有更多了</p> 
                </div>
            </div>
        )
    }
}
