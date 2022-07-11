import { SearchWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getBillListAction } from "../../store/action";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import moment from "moment";
import "moment/locale/zh-cn";

const Search = () => {
  const [dataList, setdatalist] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [sort, setsort] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillListAction({ date: "2022-" + dataList[currentIndex], sort }));
  }, [dataList, currentIndex, sort]);

  const billList = useSelector((store) => {
    return store.get("billList");
  });

  useEffect(() => {
    let newDateList = [];
    for (let i = 0; i <= 5; i++) {
      newDateList.push(moment().add(i, "days").format("MM-DD"));
    }
    setdatalist(newDateList);
  }, []);

  const dateBtn = (date, index) => {
    dispatch(getBillListAction({ date, sort: 1 }));
    setcurrentIndex(index);
  };

  window.addEventListener("scroll", (e) => {
    const y = e.srcElement.scrollingElement.scrollTop;
    if (y < 30) {
      setnavtabShow(true);
    } else {
      setnavtabShow(false);
    }
  });

  const [navtabShow, setnavtabShow] = useState(true);

  const [arr, setarr] = useState([434, 554, 632, 357, 876, 1009]);

  const sortBnt = (index) => {
    if (sort === index) {
      setsort(-index);
    } else {
      setsort(index);
    }
    console.log(sort);
    dispatch(getBillListAction({ date: dataList[currentIndex], sort: index }));
  };
  const navigate = useNavigate();
  return (
    <SearchWrapper navtabShow={navtabShow}>
      <div className="navbar">
        <i
          className="iconfont icon-xiangzuojiantou"
          onClick={(e) => navigate("/")}
        ></i>
        <span>
          北京<i className="iconfont icon-xiangyoujiaohuan"></i>上海
        </span>
        <i className="iconfont icon-sousuo"></i>
      </div>
      <div className="navtab">
        {dataList.map((item, index) => {
          return (
            <div
              onClick={(e) => dateBtn(item, index)}
              className={["navtab-item"]
                .concat([currentIndex === index ? "active" : ""])
                .join(" ")}
              key={item}
            >
              <div>{item}</div>
              <div>
                {moment().format("MM-DD") === item
                  ? "今天"
                  : moment(item).format("dddd")}
              </div>
              <div>￥{arr[index]}</div>
            </div>
          );
        })}
      </div>
      <div className="billList">
        {billList.map((item) => {
          console.log(item);
          return (
            <div key={item.id} className="billItem">
              <div className="start">
                <div>{item.start}</div>
                <div>{item.startAirport}</div>
              </div>
              <div>
                <div className="line">
                  <div>
                    {item.duration}
                  </div>

                  <div>————————</div>
                </div>
              </div>
              <div className="end">
                <div>{item.end}</div>
                <div>{item.arriveAirport}</div>
              </div>
              <div className="price">
                <div>￥{item.price}</div>
                <div>{item.discount}</div>
              </div>
              <div className="plane_name">{item.aircraft}</div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div
          className={["footer-item"]
            .concat([sort === 0 ? "active" : ""])
            .join(" ")}
        >
          <div className="iconfont icon-shaixuan"></div>
          <span>筛选</span>
        </div>
        <div
          onClick={(e) => sortBnt(1)}
          className={["footer-item"]
            .concat([sort === 1 || sort === -1 ? "active" : ""])
            .join(" ")}
        >
          <div className="iconfont icon-paixu"></div>
          <span>
            {sort === 1 ? "推荐升序" : sort === -1 ? "推荐降序" : "默认排序"}
          </span>
        </div>
        <div
          onClick={(e) => sortBnt(2)}
          className={["footer-item"]
            .concat([sort === 2 || sort === -2 ? "active" : ""])
            .join(" ")}
        >
          <div className="iconfont icon-shijian"></div>
          <span>
            {sort === 2 ? "时间升序" : sort === -2 ? "时间降序" : "时间"}
          </span>
        </div>
        <div
          onClick={(e) => sortBnt(3)}
          className={["footer-item"]
            .concat([sort === 3 || sort === -3 ? "active" : ""])
            .join(" ")}
        >
          <div className="iconfont icon-jiage"></div>
          <span>
            {sort === 3 ? "价格升序" : sort === -3 ? "价格降序" : "价格"}
          </span>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Search;
