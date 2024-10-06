import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./components/Login/Login"
import App from "./components/App";
import ProductInfo from './components/product/ProductInfo';
import AdminLogin from "./components/admin/adminLogin";
import AdminPannel from "./components/admin/admin";
import BuyPage from "./components/buyPage/buyPage"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
   
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/product",
    element:<ProductInfo/>
  },
  {
    path:"/admin",
    element:<AdminLogin/>
  }
  ,{
    path:"/adminPannel",
    element:<AdminPannel/>
  }
  ,{
    path:"/Buy",
    element:<BuyPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


