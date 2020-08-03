import React, { Component } from 'react'
import Headerbar from '../../../component/mine/headerbar'
import Button from '../../../component/mine/button'
import axios from 'axios'
class myaddress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'block',
      list: [],
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
      </div>
    )
  }
}
export default myaddress
