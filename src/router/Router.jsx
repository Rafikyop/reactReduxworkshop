import React from "react";
import "./App.css";
import Builder from "./components/Builder";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Receipt from "./components/Receipt";
import { reducer } from "../components/redux/reducers/userReducer";

const store = createStore(reducer);

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Builder} />
        <Route path="/receipt" component={Receipt} />
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
