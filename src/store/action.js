import { getBill } from "../network/bill";
import { GET_BILLLIST_ACTION } from "./content";

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
