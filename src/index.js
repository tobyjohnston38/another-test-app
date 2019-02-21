import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer, { initialState } from "./reducer"
import { composeWithDevTools } from "redux-devtools-extension"

const appState = createStore(rootReducer, initialState, composeWithDevTools())

const jsx = (
  <Provider store={appState}>
    <App footerText={"good"} />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
