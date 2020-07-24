import React, { Component } from "react";
import css from "../css/pay/pay.module.css";
import { Drawer, Button, Radio, Space } from "antd";
import "../css/pay/iconfont/iconfont.css";
import "antd/dist/antd.css";
// const [visible, setVisible] = useState(false);
export default class pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatList: [
        {
          price: 300,
          seat: [
            [1, 1, 1, -1, 0, 0, -1, 0, 1, 1, 1, 0, 1],
            [1, 1, 1, -1, 0, 0, -1, 1, 1, 0, 1, 1],
            [1, 1, 1, 0, 0, 1, -1, 1, 0, 1, 1, 1],
          ],
        },
        {
          price: 200,
          seat: [
            [1, 1, 1, 0, 0, 0, -1, 0, 1, 0, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 0],
            [1, 1, 1, 0, 0, 0, -1, 1, 0, 1, 1, 1],
          ],
        },
        {
          price: 100,
          seat: [
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, -1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, -1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, -1, 1],
          ],
        },
        {
          price: 100,
          seat: [
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
          ],
        },
        {
          price: 100,
          seat: [
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
          ],
        },
        {
          price: 100,
          seat: [
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
          ],
        },
        {
          price: 100,
          seat: [
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
          ],
        },
      ],
      selected: [],
      allPrice: 0,
      isShow: "none",
      color: ["red", "yellow", "green"],
      visible: false,
      placement: "top",
      // seatList: [
      //   {
      //     price: 100, //一个作为的价钱
      //     seat: [0, 0], //一个座位的坐标 第一排第一座
      //     state: 1, //座位状态 1不可选 0可选
      //   },
      //   {
      //     price: 200, //一个作为的价钱
      //     seat: [0, 1], //座位坐标，第一排第一座
      //     state: 1, //座位状态 1不可选 0可选
      //   },
      // ],
    };
  }
  /* ----------------------<抽屉>-------------------- */
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

  /* ----------------------</抽屉>-------------------- */

  checkSelect(seatList) {
    let seats = [];
    let price = 0;
    seatList.forEach((item) => {
      item["seat"].forEach((_item, x) => {
        _item.forEach((__item, y) => {
          if (__item === 2) {
            price += item["price"];
            seats.push(`${x + 1}排${y + 1}座`);
          }
        });
      });
    });
    return { seats, price };
  }
  choose(e) {
    let { seatList } = this.state;
    //  获取 位置信息 【价位，x,y】
    var position = e.target
      .getAttribute("state")
      .split(",")
      .map((item) => {
        return Number(item);
      });
    // 所指位置的状态信息
    var State = seatList[position[0]]["seat"][position[1]][position[2]];
    // 状态为-1（-1为过道）时退出
    if (State === -1) return;
    //
    switch (State) {
      case 0:
        State = 2;
        break;
      case 2:
        State = 0;
        break;
      default:
    }
    seatList[position[0]]["seat"][position[1]][position[2]] = State;
    let { seats, price } = this.checkSelect(seatList);
    this.setState({
      seatList: seatList,
      selected: [...seats],
      allPrice: price,
    });
  }
  scale = (e) => {
    e.preventDefault();
    // console.log(1);
    // console.log(e);
  };
  render() {
    let { seatList } = this.state;
    let price = seatList.map((item) => {
      return item["price"];
    });
    price = Array.from(new Set(price));
    console.log(price);
    return (
      <div className={css.choose_seat_wrap}>
        {" "}
        {/* 价格信息区 */}
        <div className={css.choose_seat_header}>
          {price.map((item, index) => {
            return (
              <span key={index}>
                <i
                  style={{ background: this.state.color[index] }}
                  className={css.block}
                ></i>{" "}
                ￥{item}{" "}
              </span>
            );
          })}
        </div>
        {/* 选座区 */}
        <div className={css.choose_seat_container} onScroll={this.scale}>
          <ul className={css.choose_seat_view}>
            {/* 第一层遍历，遍历出每一个对象，对象包含价钱和位置 */}
            {seatList.map((group, g) => {
              let color = price.indexOf(group.price);
              return (
                <li key={g}>
                  {/* 第二成遍历，遍历出每一行位置数组 */}
                  {group.seat.map((row, y) => {
                    return (
                      <p key={y + g}>
                        {/* 第三城遍历，遍历出每一个座位位置 */}
                        {row.map((seat, x) => {
                          if (seat === -1)
                            return (
                              <span className={css.way} key={x + g + y}></span>
                            );
                          return (
                            <span
                              key={x + g + y}
                              className={
                                (seat === 1
                                  ? css.disable
                                  : seat === 2
                                  ? css.preselection
                                  : css.chooseable) + " iconfont icon-shafa"
                              }
                              state={[g, y, x]}
                              onClick={(e) => {
                                this.choose(e);
                              }}
                              style={{
                                color:
                                  seat === 0 ? this.state.color[color] : "",
                              }}
                            >
                              {""}
                            </span>
                          );
                        })}
                      </p>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </div>
        {/* 确认购票 */}
        <div className={css.choose_seat_footer}>
          <div>
            <Space className={css.bt}>
              <Button type="primary" onClick={this.showDrawer}>
                共{this.state.selected.length}张 ^
              </Button>
            </Space>
            <Drawer
              title="座位信息"
              placement="bottom"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
              key={this.state.placement}
            >
              {this.state.selected.map((item, key) => (
                <p key={key}>{item}</p>
              ))}
            </Drawer>
          </div>
          <p>确认选座</p>
          <p>￥{this.state.allPrice}</p>
        </div>
      </div>
    );
  }
}
