import React, { Component } from 'react'
import Headerbar from '../../../component/mine/headerbar'
import Button from '../../../component/mine/button'
<<<<<<< HEAD
// import Add1 from './Add.address'
=======
import axios from 'axios'
>>>>>>> wyy1
class myaddress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'block',
<<<<<<< HEAD
=======
      list: [],
>>>>>>> wyy1
    }
  }

  showADD = () => {
    if (this.state.display === 'block') {
      this.setState({
        display: 'none',
      })
    }
    this.props.history.push('/ADDaddress')
  }
<<<<<<< HEAD

  render() {
    console.log(this.state.display)
    return (
      <div style={{ height: '100vh' }}>
        <div style={{ display: this.state.display }}>
          <Headerbar>收货地址</Headerbar>
          <Button>
            <button onClick={this.showADD}>+添加收货地址</button>
          </Button>
        </div>
=======
  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://192.168.9.78:8081/live/juooo/myModuleController/getAddress',
      params: {
        userid: 55555,
      },
    }).then((res) => {
      console.log(res)
      this.setState({
        list: res.data.data,
      })
    })
  }
  render() {
    const { list } = this.state
    console.log(list)
    return (
      <div style={{ display: this.state.display }}>
        <Headerbar>收货地址</Headerbar>
        <div style={{ overflow: 'hidden' }}>
          <div>
            {list.map((item) => {
              return (
                <div
                  key={item.addressId}
                  style={{
                    width: '330px',
                    height: '100px',
                    lineHeight: '100px',
                    textAlign: 'center',
                    margin: '20px',
                    border: '1px solid black',
                  }}
                >
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      marginRight: '10px',
                    }}
                  >
                    {item.consignee} {item.phone}
                  </span>

                  <span>
                    {item.region} {item.address}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <Button>
          <button onClick={this.showADD}>+添加收货地址</button>
        </Button>
>>>>>>> wyy1
      </div>
    )
  }
}
export default myaddress
