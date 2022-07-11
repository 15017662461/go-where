import { IndexWrapper } from "./style";
import { Tabs, Radio, Button } from "antd-mobile";
import { useNavigate } from "react-router";

const Index = () => {
  const navigate = useNavigate();
  const searchHandle = () => {
    navigate("/search")
  };

  return (
    <IndexWrapper>
      <div className="nav-bar">
        <i className="iconfont icon-home"></i>
        <span>机票</span>
        <i className="iconfont icon-kefu"></i>
      </div>

      <Tabs className="search-box">
        <Tabs.Tab title="国内" key="inland">
          <div className="path">
            <span>北京</span>
            <i className="iconfont icon-jipiao"></i>
            <span>上海</span>
          </div>
          <p className="date">
            <span>07月05日</span> 周二
          </p>
          <div className="select-space">
            <span className="label">选择舱位</span>
            <div className="radio-group">
              <Radio.Group>
                <Radio value={"child"}>
                  携带儿童
                  <br />
                  2~12岁
                </Radio>
                <Radio value={"baby"}>
                  携带婴儿
                  <br />
                  14天~2岁
                </Radio>
              </Radio.Group>
            </div>
          </div>
          <Button
            className="search-btn"
            onClick={searchHandle}
            block
            shape="rounded"
            color="warning"
          >
            搜索
          </Button>
          <div className="my-form">我的订单</div>
        </Tabs.Tab>
        <Tabs.Tab title="国际/中国港澳台" key="international">
          <div className="path">
            <span>北京</span>
            <i className="iconfont icon-jipiao"></i>
            <span>上海</span>
          </div>
          <p className="date">
            <span>07月05日</span> 周二
          </p>
        </Tabs.Tab>
        <Tabs.Tab title="往返" key="goback">
          <div className="path">
            <span>北京</span>
            <i className="iconfont icon-jipiao"></i>
            <span>上海</span>
          </div>
          <p className="date">
            <span>07月05日</span> 周二
          </p>
        </Tabs.Tab>
      </Tabs>

      <div className="module">
        <div className="module-item">
          <i className="iconfont icon-tejiajipiao"></i>
          <span>低价机票</span>
        </div>
        <div className="module-item">
          <i className="iconfont icon-yuanjing"></i>
          <span>多地比价</span>
        </div>
        <div className="module-item">
          <i className="iconfont icon-airplane-full"></i>
          <span>航班动态</span>
        </div>
        <div className="module-item">
          <i className="iconfont icon-shafa"></i>
          <span>值机选座</span>
        </div>
      </div>
    </IndexWrapper>
  );
};

export default Index;
