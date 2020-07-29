import React, { Component } from 'react'
import Headerbar from '../../../component/mine/headerbar'
import Button from '../../../component/mine/button'
// import Add1 from './Add.address'
class myaddress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'block',
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
      </div>
    )
  }
}
export default myaddress
