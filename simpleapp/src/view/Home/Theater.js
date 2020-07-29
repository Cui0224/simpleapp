import React, { Component, Fragment } from 'react';
import list_style from '../../css/bl/theater.module.css'
import "../../css/bl/iconfont/iconfont.css"
import Swiper from 'swiper';
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
export default class TheaterList extends Component {
    constructor() {
        super();
        this.state = {
            Theater_List: [
                {
                    theaterid: 1,
                    avatar: "https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg",
                    theaterTitle: "南山文体中心",
                    time: 53,
                    showdatatime: ['09月03日', '09月27日', '10月06日', '10月10日', '10月31日', '11月31日', '12月10日', '12月31日'],
                    show_posters: [
                        'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg',
                        'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LAe6AC-vwAACnPMZe_TQ780.jpg',
                        'https://image.juooo.com//group1/M00/04/25/rAoKNV4O1E2AR24SAABCOpBdJGk245.jpg',
                        'https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg',
                        'https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg',
                        'https://image.juooo.com//group1/M00/03/63/rAoKmV3y6wCAIXZIAAChpncncD0689.jpg',
                        'https://image.juooo.com//group1/M00/03/40/rAoKmV3LdBWAImHFAACB1n-G-Nk921.jpg',
                        'https://image.juooo.com//group1/M00/03/E6/rAoKNV3FDp2AYoW7AADDFklcihs978.jpg',
                    ]
                },

                {
                    theaterid: 2,
                    avatar: "https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg",
                    theaterTitle: "南山文体中心",
                    time: 53,
                    showdatatime: ['09月03日', '09月27日', '10月06日', '10月10日', '10月31日', '11月31日', '12月10日', '12月31日'],
                    show_posters: [
                        'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg',
                        'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LAe6AC-vwAACnPMZe_TQ780.jpg',
                        'https://image.juooo.com//group1/M00/04/25/rAoKNV4O1E2AR24SAABCOpBdJGk245.jpg',
                        'https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg',
                        'https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg',
                        'https://image.juooo.com//group1/M00/03/63/rAoKmV3y6wCAIXZIAAChpncncD0689.jpg',
                        'https://image.juooo.com//group1/M00/03/40/rAoKmV3LdBWAImHFAACB1n-G-Nk921.jpg',
                        'https://image.juooo.com//group1/M00/03/E6/rAoKNV3FDp2AYoW7AADDFklcihs978.jpg',

                    ]
                },

                {
                    theaterid: 3,
                    avatar: "https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg",
                    theaterTitle: "南山文体中心",
                    time: 53,
                    showdatatime: ['09月03日', '09月27日', '10月06日', '10月10日', '10月31日', '11月31日', '12月10日', '12月31日'],
                    show_posters: [
                        'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg',
                        'https://image.juooo.com//group1/M00/03/7A/rAoKmV4LAe6AC-vwAACnPMZe_TQ780.jpg',
                        'https://image.juooo.com//group1/M00/04/25/rAoKNV4O1E2AR24SAABCOpBdJGk245.jpg',
                        'https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg',
                        'https://image.juooo.com//group1/M00/04/05/rAoKNV3p9MGAL4-fAABlWN_fCvM587.jpg',
                        'https://image.juooo.com//group1/M00/03/63/rAoKmV3y6wCAIXZIAAChpncncD0689.jpg',
                        'https://image.juooo.com//group1/M00/03/40/rAoKmV3LdBWAImHFAACB1n-G-Nk921.jpg',
                        'https://image.juooo.com//group1/M00/03/E6/rAoKNV3FDp2AYoW7AADDFklcihs978.jpg',

                    ]
                },
            ]
        }
    }
    componentDidMount() {

        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 2.7,
            paginationClickable: true,
            // spaceBetween: 10,

        });
    }
    render() {
        const { Theater_List } = this.state;
        return (
            <React.Fragment>
                <div className={list_style.list_title}>剧院</div>
                <div style={{ paddingBottom: "80px" }}>
                    {
                        Theater_List.map((v, i) => {
                            return (
                                <div key={i} className={list_style.box}>
                                    <div>
                                        <NavLink to={"/theaterlist"}>
                                            <img src={v.avatar} className={list_style.bl_avatar} />
                                        </NavLink>
                                        <NavLink to={"/theaterlist"}>
                                            <dl>
                                                <dt>{v.theaterTitle}</dt>
                                                <dd>{v.time}场在售演出</dd>
                                            </dl>
                                        </NavLink>

                                        <NavLink to={"/theaterlist"} >
                                            <img src={"/bl/more.2ce7873.png"} className={list_style.avatimg} />
                                        </NavLink>

                                    </div>
                                    
                                    <div className={"swiper-container " + " " + list_style.swiper_container}>
                                        <div className={"swiper-wrapper " + " " + list_style.swiper_wrapper}>
                                            {v.show_posters.map((item, index) => (
                                                <div className={"swiper-slide " + " " + list_style.swiper_slide} key={index}>
                                                    <p className={list_style.postime}>{v.showdatatime[index]}</p>
                                                    <span className={"iconfont icon-dian "+list_style.dian}></span>
                                                    <img src={item} className={list_style.postimg} />
                                                </div>

                                            ))}

                                        </div>
                                    </div>
                                </div>


                            )



                        })
                    }
                </div>


            </React.Fragment>


        )
    }
}
