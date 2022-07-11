import { createStore, applyMiddleware, compose } from "redux";
import { Map } from "immutable";
import thunk from "redux-thunk";
import { GET_BILLLIST_ACTION } from "./content";

const defaultState = Map({
  billList: [],
});

function Reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_BILLLIST_ACTION:
      return state.set("billList", action.value.data.list);
    default:
      return state;
  }
}

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
