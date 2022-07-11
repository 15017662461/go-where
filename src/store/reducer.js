import { createStore, applyMiddleware, compose } from "redux";
import { Map } from "immutable";
import thunk from "redux-thunk";
import { GET_BILLLIST_ACTION,GET_MIN_PRICES } from "./content";

const defaultState = Map({
  billList: [],
  minPrices:[]
});

function Reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_BILLLIST_ACTION:
      return state.set("billList", action.value.data.list);
    case GET_MIN_PRICES:
      return state.set("minPrices", action.value.data.minPrices)
    default:
      return state;
  }
}

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
