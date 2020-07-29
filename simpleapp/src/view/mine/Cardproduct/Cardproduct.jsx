import React, { Component } from 'react'
import HeaderBar from '../../../component/mine/headerbar'
import { Entry } from './style'
import { Carousel, WingBlank } from 'antd-mobile'
export default class Cardproduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
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
            <div className="title">储值卡</div>
            <div className="cardlist">
              <div className="carditem">
                <div className="itimg">
                  <img src="https://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png" />
                </div>
                <div className="text">
                  <p>橙plus</p>
                  <span>有效期</span>
                  <div className="bottom">
                    <span>￥999</span>
                    <span className="span1">增vip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Entry>
        <Entry>
          <div>
            <div className="title">储值卡</div>
            <div className="cardlist">
              <div className="carditem">
                <div className="itimg">
                  <img src="https://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png" />
                </div>
                <div className="text">
                  <p>橙plus</p>
                  <span>有效期</span>
                  <div className="bottom">
                    <span>￥999</span>
                    <span className="span1">增vip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardlist">
              <div className="carditem">
                <div className="itimg">
                  <img src="https://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png" />
                </div>
                <div className="text">
                  <p>橙plus</p>
                  <span>有效期</span>
                  <div className="bottom">
                    <span>￥999</span>
                    <span className="span1">增vip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Entry>
        <Entry>
          <div>
            <div className="title">储值卡</div>
            <div className="cardlist">
              <div className="carditem">
                <div className="itimg">
                  <img src="https://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png" />
                </div>
                <div className="text">
                  <p>橙plus</p>
                  <span>有效期</span>
                  <div className="bottom">
                    <span>￥999</span>
                    <span className="span1">增vip</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardlist">
              <div className="carditem">
                <div className="itimg">
                  <img src="https://image.juooo.com/group1/M00/02/44/rAoKNVvFTxWAS5R5AADYaD4FCg4828.png" />
                </div>
                <div className="text">
                  <p>橙plus</p>
                  <span>有效期</span>
                  <div className="bottom">
                    <span>￥999</span>
                    <span className="span1">增vip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Entry>
      </div>
    )
  }
}
