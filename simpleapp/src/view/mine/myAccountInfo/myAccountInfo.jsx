import React, { Component } from 'react'

import {
  Popover,
  NavBar,
  Icon,
  ImagePicker,
  DatePicker,
  List,
} from 'antd-mobile'
import { Formcontainer } from './myAccountInfo.style'

const Item = Popover.Item

const data = []
export default class myAccountInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      files: data,
      nickname: '',
      value: '',
      date: '',
    }
  }
  get = (e) => {
    let value = e.target.value
    this.setState({
      [e.target.name]: value,
    })
  }

  render() {
    const { files } = this.state

    return (
      <div style={{ height: '100%' }}>
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
            rightContent={
              <Popover
                mask
                overlayClassName="fortest"
                overlayStyle={{ color: 'currentColor' }}
                visible={this.state.visible}
                overlay={[
                  <Item key="4" value="scan">
                    home
                  </Item>,
                  <Item
                    key="5"
                    value="special"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Mine
                  </Item>,
                ]}
                align={{
                  overflow: { adjustY: 0, adjustX: 0 },
                  offset: [-10, 0],
                }}
              >
                <div
                  style={{
                    height: '100%',
                    padding: '0 15px',
                    marginRight: '-15px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon type="ellipsis" />
                </div>
              </Popover>
            }
          >
            个人信息
            <p
              style={{ marginLeft: '120px', marginBottom: '0' }}
              onClick={this.save}
            >
              保存
            </p>
          </NavBar>
        </div>
        <Formcontainer>
          <div className="tophead">
            <img
              className="img0"
              src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png"
              alt=""
            />
            <ImagePicker
              className="img1"
              files={files}
              onImageClick={(index, fs) => console.log(index, fs)}
            />
          </div>
          <div className="formitem">
            <span>用户id</span>
            <span>999999</span>
          </div>
          <div className="formitem">
            <span>昵称</span>
            <input
              type="text"
              value={this.state.nickname}
              name="nickname"
              onChange={this.get}
            />
          </div>
          <div className="formitem">
            <span>性别</span>
            <input type="radio" value="男" name="sex" onChange={this.get} />男
            <input type="radio" value="女" name="sex" onChange={this.get} />女
          </div>
          <div className="formitem">
            <div className="date1">
              <DatePicker
                mode="date"
                value={this.state.date}
                onChange={(date) => this.setState({ date })}
              >
                <List.Item>日期</List.Item>
              </DatePicker>
            </div>
          </div>
        </Formcontainer>
      </div>
    )
  }
  save = () => {
    this.props.history.push('/mysecurity')
  }
}
