import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootComponent from "./RootComponent";
import store from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootComponent />
    </PersistGate>
  </Provider>
);
