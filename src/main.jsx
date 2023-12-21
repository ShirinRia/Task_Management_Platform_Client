import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,

} from "@tanstack/react-query";
import {

  RouterProvider
} from "react-router-dom";
import Provider from './Provider/Provider';
import Routes from './Routes/Routes';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
     
        <div >
          <Provider> <RouterProvider router={Routes} /></Provider>
        </div>
      
    </QueryClientProvider>

  </React.StrictMode>,
)
