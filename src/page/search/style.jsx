import styled from "styled-components";

export const SearchWrapper = styled.div`
  .navbar {
    position: fixed;
    height: 44px;
    background-color: #1ba9ba;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0 10px;
    font-size: 20px;
    z-index: 100;
    border-bottom: 1px solid #fff;
    .iconfont {
      font-size: 25px;
    }
  }
  .navtab {
    width: 100%;
    height: 70px;
    display: flex;
    margin-top: 45px;
    background-color: #1ba9ba;
    justify-content: space-around;
    margin-top: ${(props) => (props.navtabShow ? "45px" : "-20px")};
    position: absolute;
    transition: all 0.3s;
    .navtab-item {
      width: 50px;
      height: 60px;
      text-align: center;
      color: #fff;
      margin: 2px;
      border-radius: 10px;
      div {
        line-height: 20px;
      }
    }
    .active {
      background-color: #fff;
      color: #1ba9ba;
    }
  }

  .billList {
    padding-top: 110px;
    .billItem {
      display: flex;
      padding: 15px;
      justify-content: space-between;
      text-align: center;
      flex-wrap: wrap;
      border-bottom: 1px solid #dadada;
      .start {
        text-align: left;
        div:nth-child(1) {
          font-size: 20px;
        }
        div:nth-child(2) {
          color: #999;
          margin-top: 5px;
        }
      }
      .line {
        margin-top: 10px;
        color: #999;
        div:nth-child(1) {
          font-size: 10px;
        }
        div:nth-child(2) {
          color: #999;
          position: relative;
          &::after {
            content: "—";
            display: block;
            position: absolute;
            transform: rotate(40deg);
            right: -4px;
            top: -4px;
          }
        }
      }
      .end {
        text-align: right;
        div:nth-child(1) {
          font-size: 20px;
        }
        div:nth-child(2) {
          color: #999;
          margin-top: 5px;
        }
      }

      .price {
        div:nth-child(1) {
          color: #ff8d5d;
          font-size: 20px;
        }
        div:nth-child(2) {
          color: #999;
          font-size: 10px;
          margin-top: 5px;
        }
      }
      .plane_name {
        width: 100%;
        text-align: left;
        margin-top: 10px;
        color: #999;
      }
    }
  }

  .footer {
    position: fixed;
    height: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #999;
    margin-bottom: ${(props) => (props.navtabShow ? 0 : "-60px")};
    transition: all .3s;
    div {
      margin-top: 5px;
    }
    span {
      display: inline-block;
      margin-top: 5px;
    }
    .active {
      color: #1ba9ba;
    }
  }
`;
