import React from 'react'
import ReactDOM from 'react-dom'
import About from './pages/About'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Page from "./pages";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App/>}>
            <Route index element={<About />}></Route>`
              <Route path="home" element={<Page.Home />}></Route>
              
              <Route path="cart" element={<Page.Cart />}></Route>
             
              <Route path="/home/book/:id" element={<Page.ProductDetail />}></Route>
              <Route path="/book/:id" element={<Page.ProductDetail />}></Route>
              
            <Route path="/text" element={<Page.Text />}></Route>
            <Route path="/text/book/:id" element={<Page.ProductDetail />}></Route>
            <Route path="/bestsellers" element={<Page.Bestsellers />}></Route>
            <Route path="/bestsellers/book/:id" element={<Page.BookBest/>}></Route>
             
          </Route>
        </Routes>  
      </BrowserRouter>
    </Provider>
  
    
  </React.StrictMode>,
  document.getElementById('root')
)
