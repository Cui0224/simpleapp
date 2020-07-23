import React, { Component } from "react";
import Newswiper from "swiper";
import "swiper/css/swiper.css";

export default class Swiper extends Component {
  componentDidMount() {
    new Newswiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: {
        disableOnInteraction: false, //手动滑动之后不打断播放
        delay: 2000,
      },

      pagination: {
        el: ".swiper-pagination",
      },

      //   // 如果需要前进后退按钮
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },

      //   // 如果需要滚动条
      //   scrollbar: {
      //     el: ".swiper-scrollbar",
      //   },
    });
  }
  render() {
    return (
      <div className="swiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://image.juooo.com/group1/M00/03/AA/rAoKmV7xp4yAdbY9AADW3s9NQoA977.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://image.juooo.com/group1/M00/04/4C/rAoKNV7XVBSAUSbWAADNrD_jcxM180.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://image.juooo.com/group1/M00/04/3E/rAoKNV6ClgWAOtm_AAEhpdmQomE538.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://image.juooo.com/group1/M00/03/A6/rAoKmV7jK9KAf_QuAACkL3EerPE247.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://image.juooo.com/group1/M00/04/17/rAoKNV4B2zOADywIAACKVI3TINE298.png"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://image.juooo.com/group1/M00/03/A6/rAoKmV7jK9KAf_QuAACkL3EerPE247.jpg"
                alt=""
              />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    );
  }
}
