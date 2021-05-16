import React from "react";
import ReactDOM from "react-dom";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import App, { reducers, initialState } from "./Monoloq";
import { IS_DEV } from "./utils";

import reportWebVitals from "./reportWebVitals";

const appReducer = combineReducers({ ...reducers });

// ==> STORE

const middleware = [thunk];

let enhancers = [applyMiddleware(...middleware)];
if (IS_DEV) {
    enhancers = [
        ...enhancers,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ];
}

export const appStore = createStore(appReducer, initialState, compose(...enhancers));

// ==>  ROOT

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/monoloq">
            <Provider store={appStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
