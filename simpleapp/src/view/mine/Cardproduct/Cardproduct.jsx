import React, { Component } from 'react'
import HeaderBar from '../../../component/mine/headerbar'
import { Entry } from './style'
import { withRouter } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile'
import axios from 'axios'
class Cardproduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      list1: [],
      list2: [],
      list3: [],
    }
  }
  get1() {
    axios({
      method: 'get',
      url:
        'http://192.168.9.78:8081/live/juooo/myModuleController/getAllCardPackage',
      params: {
        category: '品类',
      },
    }).then((res) => {
      console.log(res)
      this.setState({
        list1: res.data.data,
      })
    })
    axios({
      method: 'get',
      url:
        'http://192.168.9.78:8081/live/juooo/myModuleController/getAllCardPackage',
      params: {
        category: '存储卡',
      },
    }).then((res) => {
      console.log(res)
      this.setState({
        list2: res.data.data,
      })
    })
    axios({
      method: 'get',
      url:
        'http://192.168.9.78:8081/live/juooo/myModuleController/getAllCardPackage',
      params: {
        category: '城市',
      },
    }).then((res) => {
      console.log(res)
      this.setState({
        list3: res.data.data,
      })
    })
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'AiyWuByWklrrUDlFignR',
          'TekJlZRVCjLFexlOCuWn',
          'IJOtIlfsYdTyaDTRVrLI',
        ],
      })
    }, 100)
    this.get1()
  }
  tobuycard = (id) => {
    this.props.history.push('/buycard/' + id)
  }
  render() {
    return (
      <div>
        <HeaderBar>购买新卡</HeaderBar>
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={(index) => console.log('slide to', index)}
          >
            {this.state.data.map((val) => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  height: this.state.imgHeight,
                }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'))
                    this.setState({ imgHeight: 'auto' })
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <Entry>
          <div>
            {this.state.list2.map((item) => {
              return (
                <div>
                  {' '}
                  <div className="title">{item.category}</div>
                  <div
                    className="cardlist"
                    onClick={this.tobuycard.bind(this, item.cardId)}
                  >
                    <div className="carditem">
                      <div className="itimg">
                        <img src={item.cardimg} />
                      </div>
                      <div className="text">
                        <p>{item.cardname}</p>
                        <span>{item.deadline}</span>
                        <div className="bottom">
                          <span>￥{item.price}</span>
                          <span className="span1">{item.conversion}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Entry>
        <Entry>
          <div>
            <div className="title">城市</div>
            {this.state.list3.map((item) => {
              return (
                <div>
                  {' '}
                  <div
                    className="cardlist"
                    onClick={this.tobuycard.bind(this, item.cardId)}
                  >
                    <div className="carditem">
                      <div className="itimg">
                        <img src={item.cardimg} />
                      </div>
                      <div className="text">
                        <p>{item.cardname}</p>
                        <span>{item.deadline}</span>
                        <div className="bottom">
                          <span>￥{item.price}</span>
                          <span className="span1">{item.conversion}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Entry>
        <Entry>
          <div>
            <div className="title">分类</div>
            {this.state.list1.map((item) => {
              return (
                <div>
                  {' '}
                  <div className="cardlist">
                    <div
                      className="carditem"
                      onClick={this.tobuycard.bind(this, item.cardId)}
                    >
                      <div className="itimg">
                        <img src={item.cardimg} />
                      </div>
                      <div className="text">
                        <p>{item.cardname}</p>
                        <span>{item.deadline}</span>
                        <div className="bottom">
                          <span>￥{item.price}</span>
                          <span className="span1">{item.conversion}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Entry>
      </div>
    )
  }
}
export default withRouter(Cardproduct)
