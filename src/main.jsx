import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider
} from "react-router-dom";
import Routes from './Routes/Routes';
import Provider from './Provider/Provider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider> <RouterProvider router={Routes} /></Provider>

  </React.StrictMode>,
)
