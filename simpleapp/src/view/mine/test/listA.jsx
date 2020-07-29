// import React, { Component } from 'react'
// import { list1 } from '../../../api/get'
// export default class List1 extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       list2: [],
//     }
//   }

//   render() {
//     let { list2 } = this.state

//     return <div></div>
//   }
//   async getlist2() {
//     let id = this.props.match.params.id
//     let res = await list1(id)
//     console.log(res)
//     this.setState({
//       list2: res.data.data,
//     })
//   }
//   componentDidMount() {
//     this.getlist2()
//     console.log(this.props)
//   }
// }
