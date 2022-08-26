import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./Style.css"
import { BrowserRouter } from "react-router-dom"
import{ Provider }from 'react-redux'
import Stroe from"./store"

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={Stroe}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
