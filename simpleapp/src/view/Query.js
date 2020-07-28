import React, { Component } from "react";
import css from "../css/ccy/query.module.css";
import "../css/ccy/iconfont/iconfont.css";
export default class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInfo: "",
      history: [
        "历史1",
        "历史2",
        "历史历史历史1",
        "历历史史2",
        "历史历史历史1",
        "历史历史历史历史2",
      ],
      hot: ["冰雪奇缘", "第一次约会,", "摇滚红与黑", "咖啡因", "猫CATS"],
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    prevState.history = JSON.parse(localStorage.getItem("searchHistory"));
    return prevState;
  }
  /* 输入时候执行函数 */
  change = (e) => {
    this.setState({ searchInfo: e.target.value });
  };
  /* 模糊查询按Enter键执行函数 */
  enter = (e) => {
    if (e.keyCode !== 13) return;
    let a = JSON.parse(localStorage.getItem("searchHistory"));
    if (!a) {
      localStorage.setItem("searchHistory", JSON.stringify([e.target.value]));
      this.setState({});
      return;
    }
    if (-a.indexOf(e.target.value)) {
      a.push(e.target.value);
      localStorage.setItem("searchHistory", JSON.stringify(a));
    }
    this.setState({});
  };
  tagClick = (e) => {
    this.setState({
      searchInfo: e.target.innerText,
    });
  };
  render() {
    let { searchInfo, history, hot } = this.state;
    return (
      <div className={css.box}>
        {/* 搜索部分 */}
        <div className={css.search}>
          <label htmlFor="cyinp" className={css.inpLb}>
            <span className="iconfont icon-fangdajing1"></span>
            <input
              type="text"
              placeholder="搜索热门演出"
              value={searchInfo}
              onChange={(e) => {
                this.change(e);
              }}
              onKeyDown={(e) => {
                this.enter(e);
              }}
            />
            <span
              onClick={() => {
                this.setState({ searchInfo: "" });
              }}
            >
              X
            </span>
          </label>
          <i
            onClick={() => {
              console.log(this.props);
              this.props.history.replace("/home");
            }}
          >
            取消
          </i>
        </div>
        <div className={css.info}>
          {/* 历史搜索记录，存在显示，不存在隐藏 */}
          {history ? (
            <div>
              <h4>
                历史搜索{" "}
                <span
                  onClick={() => {
                    localStorage.removeItem("searchHistory");
                    this.setState({});
                  }}
                  style={{ float: "right", color: "red" }}
                >
                  清空历史记录
                </span>
              </h4>
              {history.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={css.tag}
                    onClick={(e) => {
                      this.tagClick(e);
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div>
            <h4>热门搜索</h4>
            {hot.map((item, index) => {
              return (
                <span
                  className={css.tag}
                  key={index}
                  onClick={(e) => {
                    this.tagClick(e);
                  }}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div></div>
        <div className={css.resSearch}>为你推荐</div>
      </div>
    );
  }
}
