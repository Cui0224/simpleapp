import styled from 'styled-components'

const Entry = styled.div`
  width: 100%;
  background-color: white;
  padding: 0.58667rem 0.4rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  .title {
    padding-bottom: 0.46667rem;
    height: 0.72rem;
    line-height: 0.72rem;
    color: #232323;
    font-size: 0.50667rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: bold;
  }
  .cardlist {
    margin-top: -0.53333rem;
    margin-bottom: -0.68rem;
    .carditem {
      padding: 0.66667rem 0;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      .itimg {
        width: 4.26667rem;
        height: 2.66667rem;
        border-radius: 0.10667rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0.2rem 0;
        margin-left: 0.4rem;
        p {
          color: #232323;
          font-size: 0.45333rem;
          font-weight: bold;
          div {
            color: #999999;
            font-size: 0.32rem;
            height: 0.64rem;
            line-height: 0.64rem;
          }
        }
        .bottom {
          height: 0.64rem;
          line-height: 0.64rem;
          span {
            color: #ff6743;
            font-size: 0.3rem;
            font-weight: bold;
          }
          .span1 {
            display: inline-block;
            width: 1.1rem;
            height: 0.45333rem;
            background: rgba(255, 129, 0, 0.1);
            border-radius: 0.08rem;
            text-align: center;
            line-height: 0.45333rem;
            font-size: 0.32rem;
            color: #d5a370;
            padding-top: 1px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
        }
      }
    }
  }
`
export { Entry }
