import styled from 'styled-components'

const Formcontainer = styled.div`
  height: 100%;
  font-size: 0.4rem;
  .tophead {
    height: 2rem;
    position: relative;

    .img0 {
      position: absolute;
      left: 50%;
      margin-left: -33px;
      padding: 10px;
    }
    .img1 {
      position: absolute;
      left: 50%;
      /* margin-left: -33px; */
      top: 50%;
      margin-top: -45px;
      height: 80px;
      /* background: red; */
      display: transparent;
    }
  }
  .formitem {
    height: 1.6rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
    span {
      width: 2.34667rem;
      margin-left: 0.4rem;
      font-size: 0.42667rem;
      color: #232323;
      text-align: left;
      span:nth-of-type(2) {
        font-size: 0.42667rem;
        color: #666666;
      }
    }
    .date1 {
      width: 100%;
    }
  }
`
export { Formcontainer }
