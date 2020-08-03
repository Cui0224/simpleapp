import React, { Component } from 'react'
import { list } from '../../../api/get'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
const Imga = styled.div`
  width: 100px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list1: [],
      lat: '',
      lng: '',
    }
  }

  render() {
    let { list1, lat, lng } = this.state

    return (
      <div>
        {list1.length > 0 &&
          list1.map((item) => {
            return (
              <div key={item.performanceId}>
                {item.name}
                <Imga onClick={() => this.get(item.lat, item.lng)}>
                  <img src={item.posterUrl} alt="" />
                </Imga>
              </div>
            )
          })}
      </div>
    )
  }
  async getlist() {
    let res = await list()
    console.log(res)
    this.setState({
      list1: res.data.data,
    })
  }
  get = (data1, data2) => {
    // console.log(data1, data2)
    this.setState(
      {
        lat: data1,
        lng: data2,
      },
      function () {
        let lat = this.state.lat
        let lng = this.state.lng
        this.props.history.push({
          pathname: '/map',
          state: { lat: this.state.lat, lng: this.state.lng },
        })
      }
    )
    // // this.props.history.push('/map')
  }
  componentDidMount() {
    this.getlist()
    console.log(this.props)
  }
}
export default withRouter(List)
