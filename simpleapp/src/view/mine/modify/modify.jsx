import React, { Component } from 'react'
import axios from 'axios'
let value1 = document.querySelector("[name='password']")
export default class modify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
    }
  }
  get = (e) => {
    let value = e.target.value
    if (value == '') {
      alert('不为空')
    }
    this.setState({
      [e.target.name]: value,
    })
  }
  change = () => {
    let psd = this.refs.psd.value
    console.log(psd)
    axios({
      method: 'get',
      url: 'http://192.168.9.78:8081/live/juooo/myModuleController/changepwd',
      params: {
        password: psd,
        userid: 55555,
      },
    }).then((res) => {
      console.log(res)
      this.setState({
        list: res.data.data,
      })
    })
  }
  componentDidMount() {
    // console.log(this.state.password)
  }
  render() {
    let { password } = this.state
    return (
      <div
        style={{
          height: '200px',
          width: '100%',
          border: '1px solid black',
          margin: '40px auto',
        }}
      >
        密码：
        <input
          type="password"
          style={{ margin: '20px' }}
          name="password"
          ref="psd"
          value={password}
          onChange={this.get}
        />
        <br></br>
        修改密码：
        <input type="password" />
        <br></br>
        <button
          style={{ width: '60px', height: '30px', margin: '20px 0' }}
          onClick={this.change}
        >
          保存
        </button>
      </div>
    )
  }
}
