import React, { Component } from 'react';

import './App.css';
import Layout from "./components/Layout";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));
window.store = store;

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
