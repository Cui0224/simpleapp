import styled from 'styled-components'

const City = styled.div`
  height: 100%;
  .wrapper {
    height: 100%;
    overflow: hidden;
    .city-list-container {
      display: block;
      background-color: #ebebeb;
      font-size: 14px;
      color: #333;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 1000;
      overflow-y: auto;
      .clearfix:after {
        content: ' ';
        display: table;
        clear: both;
      }

      .city-title {
        padding-left: 15px;
        line-height: 30px;
      }

      .city-title-letter {
        padding-left: 25px;
      }
    }
    .city-list {
      padding-right: 30px;
    }

    .city-list-inline {
      background-color: #f5f5f5;
      padding-bottom: 8px;
    }

    .city-list-inline .city-item,
    .city-list-inline .location-city {
      float: left;
      background: #fff;
      width: 29%;
      height: 33px;
      margin-top: 15px;
      margin-left: 4%;
      padding: 0 4px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      line-height: 33px;
      text-align: center;
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .city-list-inline .location-city {
      width: auto;
      min-width: 30%;
      padding: 0 20px;
    }

    .city-list-block {
      background-color: #f5f5f5;
    }

    .city-list-block .city-item {
      height: 44px;
      line-height: 44px;
      margin-left: 15px;
      border-bottom: 1px solid #c8c7cc;
    }

    .city-list-block .city-item:last-child {
      border-bottom: none;
    }
    .nav {
      position: fixed;
      top: 75px;
      top: 11vh;
      right: 0;
      width: 35px;
      z-index: 10;
      text-align: center;
      font-size: 12px;
    }

    .nav .nav-item {
      height: 16px;
      height: 2.8vh;
    }

    .nav .nav-letter {
      width: 15px;
      margin-left: 15px;
    }
  }
`
export { City }
