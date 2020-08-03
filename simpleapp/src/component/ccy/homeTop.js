import React from "react";
import css from "../../css/ccy/homeTop.module.css";
import "../../css/ccy/iconfont/iconfont.css";
export default function homeTop(props) {
  const city = localStorage.getItem("localCity");
  return (
    <div className={css.box}>
      <p
        onClick={() => {
          props.history.push("/city");
        }}
      >
        <span
          className="iconfont icon-dituzuobiao
"
        ></span>
        {city}
      </p>
      <p
        onClick={() => {
          props.history.push("/query");
        }}
      >
        <input type="text" placeholder="🔍  搜索热门演出" />
      </p>
      <p>
        <span
          className="iconfont icon-rili2"
          onClick={() => {
            props.history.push("/showcalendar");
          }}
        ></span>
      </p>
    </div>
  );
}
