import React, { Component } from 'react'
// import LolCss from "../../css/wyb/Homelol.module.css"
import Confirm from "../../component/IndexBottom/Confirm"
export default class Lol extends Component {
    render() {
        return (
            <div>
                {/* <p className={LolCss.tu} id="tu">
                    我吐了
                </p> */}
                <Confirm></Confirm>
            </div>
        )
    }
}
