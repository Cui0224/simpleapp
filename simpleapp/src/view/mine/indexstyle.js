import styled from 'styled-components'

const MineContainer = styled.div`
  height: 100%;
  background-color: #f5f5f5;
  padding-bottom: 1.6rem;
  .top {
    height: 5.58667rem;
    background: url('https://m.juooo.com/static/img/personal_bg_1.f5fc96c.png')
      no-repeat top center;
    background-size: 100%;
    position: relative;
    overflow: hidden;
    i {
      position: absolute;
      right: 0.4rem;
      top: 0.4rem;
      font-size: 0.48rem;
      color: #fefefe;
      padding-right: 0.13333rem;
    }
    .main {
      background: #fff;
      box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35, 35, 35, 0.08);
      border-radius: 0.10667rem;
      margin: 1rem 0.4rem 0;
      position: relative;
      .head {
        padding: 0 0.4rem;
        position: relative;
        .pic {
          display: inline-block;
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          border: 0.02667rem solid #ffffff;
          margin-top: -0.32rem;
          margin-right: 0.26667rem;
          background: #f5f5f5;
          overflow: hidden;
          img {
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
          }
        }
        span:first-of-type {
          position: absolute;
          top: 0.1rem;
          color: #232323;
          font-size: 0.4rem;
          font-weight: bold;
        }
        span:nth-of-type(2) {
          position: absolute;
          color: #999999;
          font-size: 0.32rem;
          bottom: 0.3rem;
        }
      }
      .label {
        margin-top: -0.09333rem;
        overflow: hidden;
        p {
          float: right;
          font-size: 0.37333rem;
          color: #454341;
          font-weight: bold;
          padding: 0.09333rem 0.28rem 0.09333rem 0.38667rem;
          background: linear-gradient(-45deg, #f5dea9, #f8d583);
          border-radius: 0.36rem 0px 0px 0.36rem;
        }
      }
      .cnt {
        display: flex;
        align-items: center;
        .item {
          flex: 1;
          text-align: center;
          position: relative;
          padding: 0.4rem 0 0.52rem;
          color: #666666;
          font-weight: 500;
          font-size: 0.32rem;
          .num {
            color: #ff6743;
            font-size: 0.53333rem;
            margin-bottom: 0.2rem;
          }
        }
        a {
          flex: 1;
          text-align: center;
          position: relative;
          padding: 0.4rem 0 0.52rem;
          color: #666666;
          font-weight: 500;
          font-size: 0.32rem;
          p {
            color: #232323;
            font-size: 0.34667rem;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }

  .vip {
    display: block;
    padding: 0 0.06667rem;
    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  .setting {
    padding: 0 0.4rem;
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 0.32rem;
      background-color: #ffffff;
      box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35, 35, 35, 0.08);
      border-radius: 0.10667rem;
      li {
        width: 25%;
        text-align: center;
        padding: 0.44rem 0 0.53333rem;
        font-size: 0.32rem;
        color: #666666;
        div {
          display: block;
          i {
            background: url('/public/logo192.png') no-repeat center;
            background-size: 100%;
          }
        }
      }
    }
  }
`

export { MineContainer }
