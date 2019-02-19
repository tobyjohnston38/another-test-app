import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./reducer"

const appState = createStore(rootReducer)

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
