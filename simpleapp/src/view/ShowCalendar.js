import React, { Component } from "react";
import css from "../css/ccy/calendar.module.css";
import { Calendar, Select, Col, Row } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default class ShowCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title:
            "【7月】金海岸演艺大舞台 西湖不可不游 金海岸不可不去 -杭州站杭州 | 杭州魔方剧院",
          time: " 2020.07.03 - 07.31",
          place: "杭州 | 杭州魔方剧院",
          price: "50",
          img: "/01.jpg",
        },
      ],
      gistData: [
        "全部",
        "演唱会",
        "音乐会",
        "话剧歌剧",
        "儿童亲子",
        "音乐剧",
        "戏曲综艺",
      ],
      bs: "",
      activeIndex: 0,
      day: new moment().format("MM-DD"),
      tyep: "全部",
    };
  }
  componentDidMount() {
    console.log(this.state.day);
  }
  /* 跳转详情页的函数 */
  ticketDetail = (id) => {
    /* 跳转到详情页 */
    // 编程式导航传产
    // this.props.history.push("/ticket", { ticketId: id });
  };
  /* 日期更改时执行函数 */
  dateChange(value) {
    let day = value.format("MM-DD"); // 07-27 日期
    console.log(day);
  }
  /* 类型更新 */
  changeType(type, index) {
    this.setState({ activeIndex: index });
    console.log(type);
  }
  render() {
    let { data, gistData, activeIndex } = this.state;
    return (
      <div className={css.box}>
        <div className={css.head}>
          <div className={css.title}>
            <span
              onClick={() => {
                this.props.history.push("/home");
              }}
            >
              返回
            </span>
            <h3>演出日历</h3>
            <span>...</span>
          </div>
          <div className={css.gist}>
            <ul className="cyCalendarBs">
              {gistData.map((item, index) => {
                return (
                  <li
                    className={index === activeIndex ? css.active : ""}
                    key={index}
                    onClick={() => {
                      this.changeType(item, index);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <span>全国</span>
          </div>
        </div>
        <div className={css.content}>
          <div className="site-calendar-customize-header-wrapper">
            <Calendar
              onChange={this.dateChange}
              disabledDate={(currentDate) => {
                return currentDate <= new Date();
              }}
              fullscreen={false}
              headerRender={({ value, onChange }) => {
                const start = 0;
                const end = 12;
                const monthOptions = [];

                const current = value.clone();
                const localeData = value.localeData();
                const months = [];
                for (let i = 0; i < 12; i++) {
                  current.month(i);
                  months.push(localeData.monthsShort(current));
                }

                for (let index = start; index < end; index++) {
                  monthOptions.push(
                    <Select.Option className="month-item" key={`${index}`}>
                      {months[index]}
                    </Select.Option>
                  );
                }
                const month = value.month();
                const year = value.year();
                const options = [];
                for (let i = year - 10; i < year + 10; i += 1) {
                  options.push(
                    <Select.Option key={i} value={i} className="year-item">
                      {i}
                    </Select.Option>
                  );
                }
                return (
                  <div style={{ padding: 8 }}>
                    <Row gutter={8}>
                      <Col>
                        <Select
                          size="small"
                          dropdownMatchSelectWidth={false}
                          className="my-year-select"
                          onChange={(newYear) => {
                            const now = value.clone().year(newYear);
                            onChange(now);
                          }}
                          value={String(year)}
                        >
                          {options}
                        </Select>
                      </Col>
                      <Col>
                        <Select
                          size="small"
                          dropdownMatchSelectWidth={false}
                          value={String(month)}
                          onChange={(selectedMonth) => {
                            const newValue = value.clone();
                            newValue.month(parseInt(selectedMonth, 10));
                            onChange(newValue);
                          }}
                        >
                          {monthOptions}
                        </Select>
                      </Col>
                    </Row>
                  </div>
                );
              }}
              onPanelChange={this.onPanelChange}
            />
          </div>
          <div className={css.showList}>
            {data.map((item, index) => {
              return (
                <div
                  className={css.show_con_wrap}
                  key={index + "a"}
                  onClick={() => {
                    this.ticketDetail(item.id);
                  }}
                >
                  <img src={item.img} alt="" />
                  <div className={css.show_con}>
                    <p>{item.time}</p>
                    <p>{item.title}</p>
                    <p>{item.place}</p>
                    <p>
                      ￥{item.price}
                      <span> 起</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
