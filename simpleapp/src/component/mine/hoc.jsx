import React, { Component } from 'react'

function hoc() {
  return class hoc extends Component {
    constructor(props) {
      super(props)
      let islogin = JSON.parse(localStorage.getItem('islogin'))
      if (!islogin) {
        this.props.history.replace('/login')
      }
    }
    render() {
      return <div></div>
    }
  }
}

export default hoc
