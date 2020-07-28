import React, { Component } from "react";
import css from "../css/ccy/ticket/ticket.module.css";
// import { recommend } from "../api/index.js";
import "../css/wyb/iconfont/iconfont.css";
import "../css/ccy/iconfont/iconfont.css";
// import BS from "better-scroll";
export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiket: {
        id: 1,
        title: "哇啦哇啦里哇啦哇啦哇啦",
        price: "100-500",
        tag: ["套票优惠", "电子票"],
        time: "2020.12.23 - 12.26",
        place: "沈阳|软件园B园大厅",
        rule: "1.5一下不能进",
        intruduce:
          "asdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisj",
      },
      host: 1,
    };
  }
  componentDidMount() {}
  render() {
    let { tiket, host } = this.state;
    return (
      <div className={css.box}>
        <div
          className={css.headMask}
          style={{ background: "url('/01.jpg')" }}
        ></div>
        <div className={css.head}>
          <div className={css.title}>
            <span>《</span>
            <span>演出详情</span>
            <span className="iconfont icon-shouye"></span>
          </div>
          <div className={css.ticketImg}>
            <img src="/01.jpg" alt="" />
            <img
              src="/mainhold.png"
              alt=""
              style={{ display: host === 1 ? "block" : "none" }}
            />
            <div>
              <p>{tiket.title}</p>
              <p>{tiket.price}</p>
            </div>
          </div>
        </div>
        <div className={css.body}>
          <div className={css.ticketInfo}>
            <p>
              {tiket.tag.map((item, index) => {
                return (
                  <span key={index} className={css.tag}>
                    {item}
                  </span>
                );
              })}
            </p>
            <p>{tiket.time}</p>
            <p>
              {tiket.place}{" "}
              <span className={css.map + " iconfont icon-dituzuobiao"}></span>
            </p>
          </div>
          <div className={css.vip}>
            <p>
              <span>入 场:</span>
              {tiket.rule}
            </p>
          </div>
          <div className={css.intruduce}>
            <h1>演出介绍</h1>
            <p>{tiket.intruduce}</p>
            <img src="/mask.png" alt="" />
            <p>展示全部</p>
          </div>
          <div className={css.remind}>
            <h1>
              温馨提醒<span>{">"}</span>
            </h1>
            <ul>
              <li>配送说明</li>
              <li>订票说明</li>
              <li>确认订单</li>
              <li>购票提醒</li>
            </ul>
          </div>
          <div className={css.recommend}></div>
        </div>
        <div className={css.foot}>
          <p>立即选座</p>
        </div>
      </div>
    );
  }
}
