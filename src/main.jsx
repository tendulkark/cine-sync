import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* StirckMode helps to check twice that values returning is same, example see in console */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
