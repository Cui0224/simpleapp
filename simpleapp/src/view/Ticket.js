import React, { Component } from "react";
import css from "../css/ccy/ticket/ticket.module.css";
import { Drawer, Button } from "antd";
// import { recommend } from "../api/index.js";
import "../css/wyb/iconfont/iconfont.css";
import "../css/ccy/iconfont/iconfont.css";
// import BS from "better-scroll";
export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      isShow: true,
      tiket: {
        id: 1,
        title: "哇啦哇啦里哇啦哇啦哇啦",
        price: "100-500",
        tag: ["套票优惠", "电子票"],
        time: "2020.12.23 - 12.26",
        detailTime: [],
        place: "沈阳|软件园B园大厅",
        rule: "1.5一下不能进",
        intruduce:
          "asdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisjasdfasdfasdfsadfasdfasdfasdfasdgwefafdsfasidjfjisj",
      },
      host: 1,
    };
  }
  showDrawer = (num) => {
    if (num === 1) {
      this.setState({
        visible1: true,
      });
    } else {
      this.setState({
        visible2: true,
      });
    }
  };

  onClose = (num) => {
    if (num === 1) {
      this.setState({
        visible1: false,
      });
    } else {
      this.setState({
        visible2: false,
      });
    }
  };
  componentDidMount() {}
  render() {
    let { tiket, host, isShow } = this.state;
    return (
      <div className={css.box + " cysite-drawer-render-in-current-wrapper"}>
        <div style={{ marginTop: 16 }}></div>
        <Drawer
          title="Basic Drawer"
          placement="bottom"
          closable={false}
          onClose={() => {
            this.onClose(1);
          }}
          visible={this.state.visible1}
          getContainer={false}
          height={430}
        >
          <p>选着日期</p>
        </Drawer>
        <Drawer
          title="Basic Drawer"
          placement="bottom"
          closable={false}
          onClose={() => {
            this.onClose(2);
          }}
          visible={this.state.visible2}
          getContainer={false}
          height={430}
        >
          <p>温馨提示</p>
        </Drawer>

        <div
          className={css.headMask}
          style={{ background: "url('/01.jpg')" }}
        ></div>
        <div className={css.head}>
          <div className={css.title}>
            <span
              onClick={() => {
                this.props.history.go(-1);
              }}
            >
              《
            </span>
            <span>演出详情</span>
            <span
              className="iconfont icon-shouye"
              onClick={() => {
                this.props.history.push("/home");
              }}
            ></span>
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
              <span
                className={css.map + " iconfont icon-dituzuobiao"}
                onClick={() => {
                  this.props.history.push("/map");
                }}
              ></span>
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
            <p style={{ height: isShow ? "300px" : "auto" }}>
              {tiket.intruduce}
            </p>
            <img
              src="/mask.png"
              alt=""
              style={{ display: isShow ? "block" : "none" }}
            />
            <p
              onClick={() => {
                this.setState({ isShow: !isShow });
              }}
            >
              {isShow ? "展示全部" : "收起全部"}
            </p>
          </div>
          <div className={css.remind}>
            <h1
              onClick={() => {
                this.showDrawer(2);
              }}
            >
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
          <p
            onClick={() => {
              this.state.visible1
                ? this.props.history.push("/pay")
                : this.showDrawer(1);
            }}
          >
            立即选座
          </p>
        </div>
      </div>
    );
  }
}
