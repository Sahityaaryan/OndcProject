import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
    // element: <AddCategory/>
  },
  {
    path: '/user/api/addCategory',
    element:(
      <AddCategory/>
    )
  },
  // {
  //   path: '/user/api/register',
  //   element:(
  //     <Register/>
  //   )
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
       < RouterProvider  router={router}/>
)
