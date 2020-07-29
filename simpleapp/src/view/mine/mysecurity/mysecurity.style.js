import styled from 'styled-components'

const SettingContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  height: 100%;
  .content1 {
    height: 2.37333rem;
    display: flex;
    align-items: center;
    .pic {
      margin-left: 0.4rem;
      height: 1.46667rem;
      width: 1.46667rem;
      border-radius: 50%;
      display: inline-block;
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
  }
  .account {
    margin-left: 0.29333rem;
    flex: 1;
    p {
      color: #232323;
      font-size: 0.42667rem;
      margin: 0.2rem;
    }
  }
  i {
    color: #999999;
    margin-right: 0.4rem;
    font-size: 0.32rem;
  }
  .item {
    height: 1.6rem;
    line-height: 1.6rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-top: 1px solid gray;

    p {
      margin-left: 0.4rem;
      font-size: 0.42667rem;
      color: #232323;
      flex: 1;
    }
    i {
      color: #999999;
      margin-right: 0.4rem;
      font-size: 0.32rem;
    }
  }
  .btn {
    text-align: center;
    width: 70%;
    height: 1.25333rem;
    margin-left: 1rem;
    margin-top: 1.06667rem;
    background-color: #ffffff;
    border-radius: 0.62667rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    span {
      margin: 0 auto;
      font-size: 0.42667rem;
      color: #ff6742;
    }
  }
`

export { SettingContainer }
