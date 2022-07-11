import { getBill,getMinPrices } from "../network/bill";
import { GET_BILLLIST_ACTION,GET_MIN_PRICES } from "./content";

export const getBillListAction = (data) => {
  return (dispatch) => {
    getBill(data).then((res) => {
      dispatch(changeBillListAction(res.data));
    });
  };
};

const changeBillListAction = (value) => ({
  value,
  type: GET_BILLLIST_ACTION,
});

export const getMinPrice = (data) => {
  return (dispatch) => {
    getMinPrices(data).then((res) => {
      dispatch(changeMinPricesAction(res.data));
    });
  };
};

const changeMinPricesAction = (value) => ({
  value,
  type: GET_MIN_PRICES,
});
