// import React, { Component } from 'react'
// import { detail } from '../../../api/get'
// export default class Detail extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       detail1: {},
//     }
//   }

//   render() {
//     let { detail1 } = this.state
//     console.log(detail1, '111')
//     console.log(detail1.bbb, 'bbb')
//     // console.log(detail1.length > 0 && detail1.static_data, '222')
//     return (
//       <div>
//         <div>
//           {detail1.bbb !== undefined ? (
//             <div>
//               {detail1.bbb.map((item, key) => (
//                 <p key={key}>{item}</p>
//               ))}
//               <div>{detail1.share_data.share_title}</div>
//             </div>
//           ) : (
//             ''
//           )}
//         </div>
//       </div>
//     )
//   }
//   async getdetail() {
//     let id = this.props.match.params.id
//     let res = await detail(id)
//     console.log(res)
//     this.setState({
//       detail1: res.data.data111[0].data,
//     })
//   }
//   componentDidMount() {
//     this.getdetail()
//     console.log(this.props)
//   }
// }
