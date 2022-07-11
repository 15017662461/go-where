import { RouterRenderce } from "./router/index";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/reducer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <RouterRenderce></RouterRenderce>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
