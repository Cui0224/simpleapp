import React, { Component } from "react";
import css from "../css/ccy/calendar.module.css";
import { Calendar, Select, Col, Row } from "antd";
import { Drawer, Button } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default class ShowCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCity: "全国",
      city: [
        {
          lists: ["全国"],
        },
        {
          title: "A",
          lists: [
            "阿坝",
            "阿拉善",
            "阿里",
            "安康",
            "安庆",
            "鞍山",
            "安顺",
            "安阳",
            "澳门",
          ],
        },
        {
          title: "B",
          lists: [
            "北京",
            "白银",
            "保定",
            "宝鸡",
            "保山",
            "包头",
            "巴中",
            "北海",
            "蚌埠",
            "本溪",
            "毕节",
            "滨州",
            "百色",
            "亳州",
          ],
        },
        {
          title: "C",
          lists: [
            "重庆",
            "成都",
            "长沙",
            "长春",
            "沧州",
            "常德",
            "昌都",
            "长治",
            "常州",
            "巢湖",
            "潮州",
            "承德",
            "郴州",
            "赤峰",
            "池州",
            "崇左",
            "楚雄",
            "滁州",
            "朝阳",
          ],
        },
        {
          title: "D",
          lists: [
            "大连",
            "东莞",
            "大理",
            "丹东",
            "大庆",
            "大同",
            "大兴安岭",
            "德宏",
            "德阳",
            "德州",
            "定西",
            "迪庆",
            "东营",
          ],
        },
        {
          title: "E",
          lists: ["鄂尔多斯", "恩施", "鄂州"],
        },
        {
          title: "F",
          lists: ["福州", "防城港", "佛山", "抚顺", "抚州", "阜新", "阜阳"],
        },
        {
          title: "G",
          lists: [
            "广州",
            "桂林",
            "贵阳",
            "甘南",
            "赣州",
            "甘孜",
            "广安",
            "广元",
            "贵港",
            "果洛",
          ],
        },
        {
          title: "H",
          lists: [
            "杭州",
            "哈尔滨",
            "合肥",
            "海口",
            "呼和浩特",
            "海北",
            "海东",
            "海南",
            "海西",
            "邯郸",
            "汉中",
            "鹤壁",
            "河池",
            "鹤岗",
            "黑河",
            "衡水",
            "衡阳",
            "河源",
            "贺州",
            "红河",
            "淮安",
            "淮北",
            "怀化",
            "淮南",
            "黄冈",
            "黄南",
            "黄山",
            "黄石",
            "惠州",
            "葫芦岛",
            "呼伦贝尔",
            "湖州",
            "菏泽",
          ],
        },
        {
          title: "J",
          lists: [
            "济南",
            "佳木斯",
            "吉安",
            "江门",
            "焦作",
            "嘉兴",
            "嘉峪关",
            "揭阳",
            "吉林",
            "金昌",
            "晋城",
            "景德镇",
            "荆门",
            "荆州",
            "金华",
            "济宁",
            "晋中",
            "锦州",
            "九江",
            "酒泉",
          ],
        },
        {
          title: "K",
          lists: ["昆明", "开封"],
        },
        {
          title: "L",
          lists: [
            "兰州",
            "拉萨",
            "来宾",
            "莱芜",
            "廊坊",
            "乐山",
            "凉山",
            "连云港",
            "聊城",
            "辽阳",
            "辽源",
            "丽江",
            "临沧",
            "临汾",
            "临夏",
            "临沂",
            "林芝",
            "丽水",
            "六安",
            "六盘水",
            "柳州",
            "陇南",
            "龙岩",
            "娄底",
            "漯河",
            "洛阳",
            "泸州",
            "吕梁",
          ],
        },
        {
          title: "M",
          lists: ["马鞍山", "茂名", "眉山", "梅州", "绵阳", "牡丹江"],
        },
        {
          title: "N",
          lists: [
            "南京",
            "南昌",
            "南宁",
            "宁波",
            "南充",
            "南平",
            "南通",
            "南阳",
            "那曲",
            "内江",
            "宁德",
            "怒江",
          ],
        },
        {
          title: "P",
          lists: ["盘锦", "攀枝花", "平顶山", "平凉", "萍乡", "莆田", "濮阳"],
        },
        {
          title: "Q",
          lists: [
            "青岛",
            "黔东南",
            "黔南",
            "黔西南",
            "庆阳",
            "清远",
            "秦皇岛",
            "钦州",
            "齐齐哈尔",
            "泉州",
            "曲靖",
            "衢州",
          ],
        },
        {
          title: "R",
          lists: ["日喀则", "日照"],
        },
        {
          title: "S",
          lists: [
            "上海",
            "深圳",
            "苏州",
            "沈阳",
            "石家庄",
            "三门峡",
            "三明",
            "三亚",
            "商洛",
            "商丘",
            "上饶",
            "山南",
            "汕头",
            "汕尾",
            "韶关",
            "绍兴",
            "邵阳",
            "十堰",
            "朔州",
            "四平",
            "绥化",
            "遂宁",
            "随州",
            "宿迁",
            "宿州",
          ],
        },
        {
          title: "T",
          lists: [
            "天津",
            "太原",
            "泰安",
            "泰州",
            "台州",
            "唐山",
            "天水",
            "铁岭",
            "铜川",
            "通化",
            "通辽",
            "铜陵",
            "铜仁",
            "台湾",
          ],
        },
        {
          title: "W",
          lists: [
            "武汉",
            "乌鲁木齐",
            "无锡",
            "威海",
            "潍坊",
            "文山",
            "温州",
            "乌海",
            "芜湖",
            "乌兰察布",
            "武威",
            "梧州",
          ],
        },
        {
          title: "X",
          lists: [
            "厦门",
            "西安",
            "西宁",
            "襄樊",
            "湘潭",
            "湘西",
            "咸宁",
            "咸阳",
            "孝感",
            "邢台",
            "新乡",
            "信阳",
            "新余",
            "忻州",
            "西双版纳",
            "宣城",
            "许昌",
            "徐州",
            "香港",
            "锡林郭勒",
            "兴安",
          ],
        },
        {
          title: "Y",
          lists: [
            "银川",
            "雅安",
            "延安",
            "延边",
            "盐城",
            "阳江",
            "阳泉",
            "扬州",
            "烟台",
            "宜宾",
            "宜昌",
            "宜春",
            "营口",
            "益阳",
            "永州",
            "岳阳",
            "榆林",
            "运城",
            "云浮",
            "玉树",
            "玉溪",
            "玉林",
          ],
        },
        {
          title: "Z",
          lists: [
            "杂多县",
            "赞皇县",
            "枣强县",
            "枣阳市",
            "枣庄",
            "泽库县",
            "增城市",
            "曾都区",
            "泽普县",
            "泽州县",
            "札达县",
            "扎赉特旗",
            "扎兰屯市",
            "扎鲁特旗",
            "扎囊县",
            "张北县",
            "张店区",
            "章贡区",
            "张家港",
            "张家界",
            "张家口",
            "漳平市",
            "漳浦县",
            "章丘市",
            "樟树市",
            "张湾区",
            "彰武县",
            "漳县",
            "张掖",
            "漳州",
            "长子县",
            "湛河区",
            "湛江",
            "站前区",
            "沾益县",
            "诏安县",
            "召陵区",
            "昭平县",
            "肇庆",
            "昭通",
            "赵县",
            "昭阳区",
            "招远市",
            "肇源县",
            "肇州县",
            "柞水县",
            "柘城县",
            "浙江",
            "镇安县",
            "振安区",
            "镇巴县",
            "正安县",
            "正定县",
            "正定新区",
            "正蓝旗",
            "正宁县",
            "蒸湘区",
            "正镶白旗",
            "正阳县",
            "郑州",
            "镇海区",
            "镇江",
            "浈江区",
            "镇康县",
            "镇赉县",
            "镇平县",
            "振兴区",
            "镇雄县",
            "镇原县",
            "志丹县",
            "治多县",
            "芝罘区",
            "枝江市",
            "芷江侗族自治县",
            "织金县",
            "中方县",
            "中江县",
            "钟楼区",
            "中牟县",
            "中宁县",
            "中山",
            "中山区",
            "钟山区",
            "钟山县",
            "中卫",
            "钟祥市",
            "中阳县",
            "中原区",
            "周村区",
            "周口",
            "周宁县",
            "舟曲县",
            "舟山",
            "周至县",
            "庄河市",
            "诸城市",
            "珠海",
            "珠晖区",
            "诸暨市",
            "驻马店",
            "准格尔旗",
            "涿鹿县",
            "卓尼",
            "涿州市",
            "卓资县",
            "珠山区",
            "竹山县",
            "竹溪县",
            "株洲",
            "株洲县",
            "淄博",
            "子长县",
            "淄川区",
            "自贡",
            "秭归县",
            "紫金县",
            "自流井区",
            "资溪县",
            "资兴市",
            "资阳",
          ],
        },
      ],
      visible: false,
      placement: "right",
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
  /* 城市选择所需函数 */
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onSelected = (e) => {
    this.onClose();
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
    let {
      data,
      gistData,
      activeIndex,
      placement,
      visible,
      city,
      selectCity,
    } = this.state;
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
            <span>
              <Button
                type="primary"
                onClick={this.showDrawer}
                className={css.Btn}
              >
                {selectCity}
              </Button>
            </span>
            <>
              <Drawer
                title={selectCity}
                placement={placement}
                closable={false}
                onClose={this.onClose}
                visible={visible}
                key={placement}
                drawerStyle={{
                  width: "258px",
                  position: "relative",
                  overflowX: "hidden",
                }}
                footer={
                  <div className={css.citySelectButton}>
                    <span
                      onClick={() => {
                        this.setState({ selectCity: "全国" });
                      }}
                    >
                      重置
                    </span>
                    <span
                      onClick={() => {
                        this.onSelected();
                      }}
                    >
                      确认
                    </span>
                  </div>
                }
                footerStyle={{ padding: 0 }}
                zIndex={10000}
              >
                {city.map((item, index) => {
                  return item.lists.map((city, _index) => {
                    // console.log(_index);
                    return (
                      <span
                        key={_index}
                        className={
                          css.city +
                          (selectCity === city ? " CYcityActive" : "")
                        }
                        onClick={(e) => {
                          this.setState({ selectCity: e.target.innerText });
                        }}
                      >
                        {city}
                      </span>
                    );
                  });
                })}
              </Drawer>
            </>
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
