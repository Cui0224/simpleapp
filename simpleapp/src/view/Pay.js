import React, { Component } from "react";
import css from "../css/pay/pay.module.css";
export default class pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatList: [
        {
          price: 300,
          seat: [
            [1, 1, 1, 1, 0, 0, -1, 0, 1, 1, 1, 0],
            [1, 1, 1, 1, 0, 0, -1, 1, 1, 0, 1, 1],
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
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, -1, 1, 1, 1, 1, 1],
          ],
        },
      ],
      chooseLenth: [],
    };
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
    // 状态为-1（-1为过道）时推出
    if (State === -1) return;
    //
    this.setState({
      seatList: (() => {
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
        return seatList;
      })(),
    });
  }
  render() {
    let { seatList } = this.state;
    console.log(seatList);
    let price = seatList.map((item) => {
      return item["price"];
    });
    return (
      <div className={css.choose_seat_wrap}>
        {" "}
        {/* 价格信息区 */}
        <div className={css.choose_seat_header}>
          {price.map((item, index) => {
            return <span key={index}>￥{item} </span>;
          })}
        </div>
        {/* 选座区 */}
        <div className={css.choose_seat_content}>
          <ul>
            {seatList.map((group, g) => {
              return (
                <li key={g}>
                  {group.seat.map((row, y) => {
                    return (
                      <p key={y + g}>
                        {row.map((seat, x) => {
                          if (seat === -1)
                            return (
                              <span className={css.way} key={x + g + y}>
                                {" "}
                              </span>
                            );
                          return (
                            <span
                              key={x + g + y}
                              className={
                                seat === 1
                                  ? css.disable
                                  : seat === 2
                                  ? css.preselection
                                  : css.chooseable
                              }
                              state={[g, y, x]}
                              onClick={(e) => {
                                this.choose(e);
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
        <div className={css.choose_seat_footer}></div>
      </div>
    );
  }
}
