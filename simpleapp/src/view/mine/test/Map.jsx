// import React, { Component } from 'react'
// import styled from 'styled-components'

// const MapContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   iframe {
//     border: none;
//     width: 100%;
//     height: 100%;
//   }
// `

// export default class Map extends Component {
//   render() {
//     // console.log(this.props.location.state.lat)
//     // console.log(this.props.location.state.lng)
//     let lat = this.props.location.state.lat
//     let lng = this.props.location.state.lng
//     return (
//       <MapContainer>
//         {/* <iframe title="map" src="/map.html?lat=${lat}&lng=${lng}"></iframe> */}
//         <iframe title="map" name="x"></iframe>
//         {console.log(window)}
//         {/* {
//           (window.frames['x'].location.href =
//             '/map.html?lat=' + lat + '&lng=' + lng)
//         } */}
//       </MapContainer>
//     )
//   }
// }
import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'

const mapKey = 'de6b5ea8e35b64c01636e8a1c7fc67a1' //需要自己去高德官网上去申请

class Address extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: { lng: '', lat: '' },
    }
  }

  render() {
    let { location } = this.state
    // console.log(location, 111)
    const position = {
      //   longitude: 125.392002,
      //   latitude: 43.995474,
      longitude: this.props.location.state.lng,
      latitude: this.props.location.state.lat,
    }

    return (
      <>
        {position && (
          <div style={{ width: '100%', height: '650px' }}>
            <Map zoom={20} center={position}>
              <Marker />
            </Map>
          </div>
        )}
      </>
    )
  }
}

export default Address
