import React, { Component } from 'react'
import Headerbar from '../.././../component/mine/headerbar'
import Buttont from '../../../component/mine/button'
import styled from 'styled-components'
import { city } from '../../../api/get'

const FormContainer = styled.div`
  div {
    height: 1.73333rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    label {
      font-size: 0.42667rem;
      color: #232323;
      width: 1.8rem;
      line-height: 0.66667rem;
      margin-right: 0.2rem;
    }
    div {
      flex: 1;
      height: 0.66667rem;
      line-height: 0.66667rem;
      input {
        width: 4rem;
        height: 100%;
        font-size: 0.42667rem;
        border: none;
        outline: none;
      }
    }
    span {
      width: 0.13333rem;
      height: 0.26667rem;
      display: inline-block;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAMAAACDMFxkAAAAM1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyOefYBvAAAAEXRSTlMA/AW1wr2r3K+fy6YKz5OSB/KUf8wAAABKSURBVAjXbc7bDoAwCAPQwjbBzdv/f60PSsUoTyehTQorivtcaG0yIVxedvxlqozkOWU2ultwWS3UZb90sKaNqkmDX/8MewTz0AmWCAFo1w/zpQAAAABJRU5ErkJggg==);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
`
const Picker = styled.div`
  .picker {
    /* display: none; */
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(37, 38, 45, 0.4);
    z-index: 100;
    .content {
      width: 100%;
      position: absolute;
      bottom: 0;
      .pick {
        overflow: hidden;

        user-select: none;
        position: relative;
        background-color: #fff;
        .bar {
          display: flex;
          height: 1.17333rem;
          line-height: 1.17333rem;

          justify-content: space-between;
          .text {
            color: #1989fa;
            padding: 0 0.4rem;
            font-size: 0.37333rem;
          }
        }
      }
    }
  }
`
class Add_address extends Component {
  constructor(props) {
    super(props)
    this.state = {
      citylist: [],
      display: 'none',
      consignee: '',
      phone: '',
      region: '',
      address: '',
    }
  }
  get = (e) => {
    let value = e.target.value
    this.setState({
      [e.target.name]: value,
    })
  }

  render() {
    let { citylist, consignee, phone, region, address } = this.state

    return (
      <div>
        <Headerbar>添加地址</Headerbar>
        <FormContainer>
          <div>
            <label>收货人</label>
            <div>
              <input
                type="text"
                placeholder="请输入收货人姓名"
                value={consignee}
                name="consignee"
                onChange={this.get}
              ></input>
            </div>
          </div>
          <div>
            <label>手机号</label>
            <div>
              <input
                type="text"
                placeholder="请输入手机号"
                value={phone}
                name="phone"
                onChange={this.get}
              ></input>
            </div>
          </div>
          <div>
            <label>所在地区</label>
            <div>
              <input
                type="text"
                placeholder="请输入所在地区"
                value={region}
                name="region"
                onChange={this.get}
              ></input>
            </div>
            <span onClick={this.Show}></span>
          </div>
          <div>
            <label>详细地址</label>
            <div>
              <input
                type="text"
                placeholder="请输入详细地址"
                value={address}
                name="address"
                onChange={this.get}
              ></input>
            </div>
          </div>
        </FormContainer>
        <Buttont>
          <button onClick={() => this.props.history.push('/address')}>
            保存
          </button>
        </Buttont>

        {/* {get_pick()} */}
        {/* <Picker style={{ display: this.state.display }}>
          <div className="picker">
            <div className="content">
              <div className="pick">
                <div className="bar">
                  <div className="text">取消</div>
                  <div className="text">确定</div>
                </div>
                {citylist.map((item) => {
                  //   console.log(item)
                  item.children.map((item1) => {
                    // console.log(item1)
                    item1.children.map((item2) => {
                      //   console.log(item2)
                      return (
                        <PickerView
                          key={item.value}
                          data={citylist}
                          onChange={{ display: this.state.display }}
                          value={[
                            `${item.label}`,
                            `${item1.label}`,
                            `${item2.label}`,
                          ]}
                        />
                      )
                    })
                  })
                })}
              </div>
            </div>
          </div>
        </Picker> */}
      </div>
    )
  }
  async getcitylist() {
    let res = await city()
    console.log(res)
    this.setState({
      citylist: res.data.province,
    })
  }
  componentDidMount() {
    this.getcitylist()
  }

  Show = () => {
    if (this.state.display === 'none') {
      this.setState({
        display: 'block',
      })
    } else if (this.state.display === 'block') {
      this.setState({
        display: 'none',
      })
    }
  }
}

export default Add_address
