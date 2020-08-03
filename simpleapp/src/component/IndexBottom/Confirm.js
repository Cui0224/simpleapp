import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { confirm } from "../../api/index"
import { Drawer, Button, notification } from 'antd';
import cStyle from "../../css/indexShow/Confirm.module.css"
import "../../css/wyb/iconfont2/iconfont.css"
class Confirm extends Component {
    constructor() {
        super();
        this.state = {
            confirmList: [],
            visible: false,
            visible1: false,
            is_show: true,
            change: false,
            change1: false,
            change2: false,
            change3: false,
            addresschange: false,
            idx: 0,
            placement: 'bottom',
            arr: [
                {
                    name: "叮当",
                    phone: "18666666666",
                    address: "辽宁省沈阳市浑南区世纪路19号东大软件园b园",
                },
                {
                    name: "辰溪",
                    phone: "18555555555",
                    address: "辽宁省锦州市古塔区士英街辽宁工业大学",
                }
            ]
        }
    }
    showDrawer = () => {
        this.setState({
            visible: true,
            is_show: false,
        });
    };
    showDrawer1 = () => {
        this.setState({
            visible1: true,
            is_show: false,
        });
    };
    showDrawer2 = () => {
        this.setState({
            visible2: true,
            is_show: false,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
            is_show: true,
        });
    };
    onClose1 = () => {
        this.setState({
            visible1: false,
            is_show: true,
        });
    };
    onClose2 = () => {
        this.setState({
            visible2: false,
            is_show: true,
        });
    };
    changeicon = () => {
        this.setState({
            change: !this.state.change,
        });
    }
    changeicon1 = () => {
        this.setState({
            change1: !this.state.change1,
        });
    }
    changeicon2 = () => {
        this.setState({
            change2: !this.state.change2,
        });
    }
    changeicon3 = () => {
        this.setState({
            change3: !this.state.change3,
        });
    }
    clickHidden = (index) => {
        this.setState({
            visible1: false,
            idx: index,
        });
    }
    toWhere = () => {
        alert("支付成功");
        this.props.history.push("/ticket")
    }
    componentDidMount() {
        // console.log(this.recommend);
        // 为你推荐
        confirm().then(({ data }) => {
            this.setState({
                confirmList: data
            })
        })
        // 选中DOM中定义的 .wrapper 进行初始化
    }
    render() {
        const { visible, visible1, visible2, confirmList, change, change1, change2, change3, arr, idx } = this.state;
        return (
            <div className={cStyle.confirm}>
                <div className={cStyle.header1}>
                    <span onClick={() => { this.props.history.back }}>&lt;</span>
                    <p>确认订单</p>
                </div>
                <div className={cStyle.title}>
                    {
                        confirmList.length > 0 && confirmList.map((item) => {
                            return (
                                <div key={item.id} className={cStyle.top}>
                                    <h4>{item.title}</h4>
                                    <p><span className="iconfont icon-clock"></span>{item.time}</p>
                                    <p><span className="iconfont icon-weibiaoti-"></span>{item.place}</p>
                                    <p>{item.count}张 &nbsp;&nbsp;|</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={cStyle.content}>
                    <div className={cStyle.list}>
                        <div className={cStyle.space}>
                            <div type="primary" onClick={this.showDrawer} className={cStyle.li}>
                                <span>配送方式</span>
                                <p><span className={cStyle.lispan}>快递</span> > </p>
                            </div>
                            <div type="primary" onClick={this.showDrawer1} className={cStyle.li}>
                                <p>
                                    <span>{arr[idx].name}</span>
                                    <span>{arr[idx].phone}</span>
                                    <br />
                                    <span>{arr[idx].address}</span>
                                </p>
                                <p> > </p>
                            </div>
                            <div className={cStyle.li}>
                                <p>
                                    <span className="iconfont icon-icon_jinggao"></span>
                                    发货说明：下单成功开演前1个月内发货，请耐心等待
                                </p>
                            </div>
                        </div>
                        <Drawer
                            title="选择配送方式"
                            placement={"bottom"}
                            closable={false}
                            onClose={this.onClose}
                            visible={visible}
                            key="1"
                        >
                            <div className={cStyle.drawer}>
                                <span>快递</span>
                                <span>√</span>
                            </div>
                        </Drawer>
                        <Drawer
                            title="选择收货地址"
                            placement={"bottom"}
                            closable={false}
                            onClose={this.onClose1}
                            visible={visible1}
                            key="2"
                        >
                            {
                                arr.length > 0 && arr.map((item, index) => {
                                    return (
                                        <div className={cStyle.drawer} key={index} onClick={() => { this.clickHidden(index) }}>
                                            <p>
                                                <span>{item.name}</span>
                                                <span>{item.phone}</span><br />
                                                <span>{item.address}</span>
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </Drawer>
                    </div>
                    <div className={cStyle.list}>
                        {
                            confirmList.length > 0 && confirmList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={cStyle.li}>
                                            <span>商品金额</span>
                                            <span>￥{item.money}</span>
                                        </div>
                                        <div className={cStyle.li}>
                                            <span>运费</span>
                                            <span>￥{item.yunfei}</span>
                                        </div>
                                        <div type="primary" onClick={this.showDrawer2} className={cStyle.li}>
                                            <span>活动优惠</span>
                                            <p><span>不使用优惠</span> > </p>
                                        </div>
                                        <Drawer
                                            title="活动优惠"
                                            placement={"bottom"}
                                            closable={false}
                                            onClose={this.onClose2}
                                            visible={visible2}
                                            key="3"
                                        >
                                            <div className={cStyle.drawer}>
                                                <span>不使用优惠</span>
                                                <span>√</span>
                                            </div>
                                        </Drawer>
                                        <div className={cStyle.li}>
                                            <span>订单备注</span>
                                            <input type="text" placeholder="填写备注信息，用于客服发货" />
                                        </div>
                                        <div className={cStyle.li}>
                                            <span></span>
                                            <p className={cStyle.sum}>合计：<span>￥{parseInt(item.money + item.yunfei)}</span></p>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className={cStyle.list}>
                        <div className={cStyle.li}>
                            <em>支付方式</em>
                        </div>
                        <div className={cStyle.li}>
                            <div className={cStyle.liLeft}>
                                <img src="/plus.png" alt="" />
                                <p>
                                    <span>橙PLUS卡支付</span><br />
                                    <span>未开通</span>
                                </p>
                            </div>
                            <div className={cStyle.liRight}>
                                <span>购卡送100元</span>
                                <div onClick={this.changeicon}>
                                    {
                                        change == true ? <span className="iconfont icon-xuanzhong"></span> : <span className="iconfont icon-weixuanzhong"></span>

                                    }
                                </div>
                            </div>
                        </div>
                        <div className={cStyle.li}>
                            <div className={cStyle.liLeft}>
                                <img src="/weixin.png" alt="" />
                                <p>
                                    <span>微信支付</span>
                                </p>
                            </div>
                            <div className={cStyle.liRight}>
                                <span></span>
                                <div onClick={this.changeicon1}>
                                    {
                                        change1 == true ? <span className="iconfont icon-xuanzhong"></span> : <span className="iconfont icon-weixuanzhong"></span>

                                    }
                                </div>
                            </div>
                        </div>
                        <div className={cStyle.li}>
                            <div className={cStyle.liLeft}>
                                <img src="/zhifubao.png" alt="" />
                                <p>
                                    <span>支付宝网页支付</span>
                                </p>
                            </div>
                            <div className={cStyle.liRight}>
                                <span></span>
                                <div onClick={this.changeicon2}>
                                    {
                                        change2 == true ? <span className="iconfont icon-xuanzhong"></span> : <span className="iconfont icon-weixuanzhong"></span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={cStyle.li}>
                            <div className={cStyle.liLeft}>
                                <img src="/fenqile.png" alt="" />
                                <p>
                                    <span>乐卡分期</span>
                                </p>
                            </div>
                            <div className={cStyle.liRight}>
                                <span> 新用户先消费，后还款</span>
                                <div onClick={this.changeicon3}>
                                    {
                                        change3 == true ? <span className="iconfont icon-xuanzhong"></span> : <span className="iconfont icon-weixuanzhong"></span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={cStyle.fconfirm} style={{ display: this.state.is_show ? "block" : "none" }}>
                    <li>我已阅读并同意<span>《聚橙网订票服务条款》</span></li>
                    {
                        confirmList.length > 0 && confirmList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className={cStyle.fleft}>
                                        应付：<span>￥{parseInt(item.money + item.yunfei)}</span>
                                    </div>
                                    <div className={cStyle.fright}>
                                        <button onClick={this.toWhere}>去付款</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default withRouter(Confirm)