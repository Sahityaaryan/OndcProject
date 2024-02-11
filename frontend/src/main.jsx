import React from 'react'
import ModifyCategory from './components/ModifyCategory.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './components/AddProdutcs.jsx'
import ModifyProduct from './components/ModifyProducts.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import ProductCard from './components/ProductCard.jsx'
import About from './components/About.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    // element: <App/>,
    element: <ProductCard/>,
    errorElement:<ErrorPage/>,
    children: [
     
      {
        path: 'user/api/modifycategory',
        element:<ModifyCategory/>,
      },
      {
        path: 'user/api/addproduct',
        element:<AddProduct/>,
      },
      {
        path: 'user/api/modifyproduct',
        element:<ModifyProduct/>,
      },
      {
        path: '',
        element:<Home/>,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'productPreview',
        element:<ProductCard/>,
      },
    ]
  },
 
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
       < RouterProvider  router={router}/>
)
