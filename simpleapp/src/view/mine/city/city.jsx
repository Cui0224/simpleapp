import React, { Component } from 'react'
import { City } from './city.style'
import { getcity } from '../../../api/get'
import BScroll from '@better-scroll/core'
export default class City1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      historyCities: [],
      hotCities: [],
      cities: [],
      Bscroll: '',
    }
  }

  render() {
    let { hotCities, cities } = this.state
    const city2 = Object.keys(cities)

    {
      return (
        <div>
          <City>
            <div
              className="wrapper"
              //   style={{ height: '100vh', overflow: 'hidden' }}
              ref="scrollWrapper"
              id="scroll"
            >
              <div>
                <section id="city-list" className="city-list-container">
                  <section>
                    <div id="locate" className="city-title">
                      定位城市
                    </div>
                    <div className="city-list city-list-inline clearfix">
                      <div className="location-city">定位失败，请点击重试</div>
                    </div>
                  </section>
                  <section className="history-city-list">
                    <div id="history" className="city-title">
                      最近访问城市
                    </div>
                    <div className="city-list city-list-inline clearfix">
                      <div className="city-item" data-nm="西安" data-id="42">
                        西安
                      </div>

                      <div className="city-item" data-nm="深圳" data-id="30">
                        深圳
                      </div>

                      <div className="city-item" data-nm="上海" data-id="10">
                        上海
                      </div>
                    </div>
                  </section>
                  <section>
                    <div id="hot" className="city-title">
                      热门城市
                    </div>
                    <div className="city-list city-list-inline clearfix">
                      {hotCities.map((item) => (
                        <div className="city-item" key={item.id}>
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <div id="A" className="city-title city-title-letter">
                      {/* {city2.map((item, index) => {
                      return <p key={index}>{item}</p>
                    })} */}
                      {Object.keys(cities).map((item, index) => {
                        return (
                          <>
                            <p key={index}>{item}</p>
                            {cities[item].map((s, index) => {
                              return <p key={index}>{s['name']}</p>
                            })}
                          </>
                        )
                      })}
                    </div>
                    <div className="city-list city-list-block clearfix">
                      <div className="city-item">
                        {/* {city2.map((key, i) => {
                        var item1 = cities[key].map((s, index) => {
                          return <p>{{cities[key][index]}}</p>
                        })
                      })} */}
                        {Object.keys(cities).map((key, i) => {
                          var item1 = cities[key].map((s, index) => {
                            return <p>{s['name']}</p>
                          })
                          return item1
                        })}
                      </div>
                    </div>
                  </section>

                  <section className="nav">
                    <div
                      className="  nav-item"
                      data-id="locate "
                      onClick={this.setPosition.bind(this, 'locate')}
                    >
                      定位
                    </div>

                    <div
                      className="  nav-item"
                      data-id="history"
                      onClick={this.setPosition.bind(this, 'history')}
                    >
                      最近
                    </div>

                    <div
                      className="  nav-item"
                      data-id="hot"
                      onClick={this.setPosition.bind(this, 'hot')}
                    >
                      热门
                    </div>
                    <div
                      className="nav-letter  nav-item"
                      data-id="A"
                      onClick={this.setPosition.bind(this, 'item')}
                      ref="item"
                    >
                      {city2.map((item, index) => {
                        return <div key={index}>{item}</div>
                      })}
                    </div>
                  </section>
                </section>
              </div>
            </div>
          </City>
        </div>
      )
    }
  }
  async getcity1() {
    let res = await getcity()
    console.log(res)
    this.setState({
      hotCities: res.data.hotCities,
      cities: res.data.cities,
    })
    this.initScroll()
    console.log(this.state.cities)
  }
  setPosition(letter) {
    console.log(letter, 'letter')
    this.scroll.scrollToElement(`#history`, 200)
  }
  initScroll() {
    this.scroll = new BScroll('#scroll', {
      //   click: true,
      scrollY: true,
      probeType: 3,
    })
  }

  componentDidMount() {
    this.getcity1()
  }
}
