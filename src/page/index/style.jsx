import styled from "styled-components";

export const IndexWrapper = styled.div`
  background: url(${require("../../assets/image/banner.png")});
  background-size: cover;
  width: calc(100% - 20px);
  height: 228px;
  padding: 10px;
  background-color: #f1f1f1;
  .nav-bar {
    display: flex;
    color: #fff;
    justify-content: space-between;
  }
  .search-box {
    box-shadow: 0 0 10px #d9d9d9;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 100px;

    .path {
      font-size: 22px;
      display: flex;
      justify-content: space-between;
    }
    .iconfont {
      color: #00bcd4;
      font-size: 30px;
    }
  }

  .date {
    margin-top: 20px;
    span {
      font-size: 20px;
    }
  }

  .select-space {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .label {
      font-size: 20px;
    }
    .radio-group {
      width: 180px;
      display: flex;
      justify-content: space-between;
      .adm-radio-content {
        color: #9c9c9c;
        font-size: 10px;
      }
    }
  }

  .search-btn {
    margin-top: 30px;
  }
  .my-form {
    margin-top: 30px;
    text-align: center;
    color: #9c9c9c;
  }

  .module {
    background-color: #fff;
    width: 100%;
    margin-top: 20px;
    box-shadow: 0 0 10px #d9d9d9;
    display: flex;
    justify-content: space-around;
    .module-item {
      margin: 10px 0;
      .iconfont {
        display: block;
        font-size: 30px;
        text-align: center;
        margin-bottom: 5px;
      }
    }
  }

  .adm-tabs-tab {
    font-size: 12px;
    color: #00bcd4;
  }
  .adm-tabs-tab-line {
    background: #00bcd4;
  }
`;
