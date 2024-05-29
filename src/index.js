
import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './views/home/home';
// import {Investor} from './views/investor/investor'
// import Resto from './views/addrestaurant/resto';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Log from './views/Log/Log';

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    // {
    //     path:'/Investor',
    //     element:<Investor/>
    // },
    // {
    //     path:"/Resto",
    //     element:<resto/>
    // }
    // {
    //     path:'/log',
    //     element:<Log/>
    // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
 <RouterProvider router={routes}/>
    </>
);
   
