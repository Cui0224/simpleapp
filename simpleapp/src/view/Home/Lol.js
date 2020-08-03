import React, { Component } from 'react'
import LolCss from "../../css/wyb/Homelol.module.css"
export default class Lol extends Component {
    render() {
        return (
            <div>
                <p className={LolCss.tu} id="tu">
                    我吐了
                </p>
            </div>
        )
    }
}
