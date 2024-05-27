
import React from 'react';
import ReactDOM from 'react-dom/client';


<<<<<<< HEAD
import Home from './views/home/home';
import { Investor } from './views/investor/investor';
// import Resto from './views/addrestaurant/resto';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Log from './views/Log/Log';

=======
>>>>>>> e169be67adce6bdd9688d8066a61bfac123f34b9
const routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:'/investor',
        element:<Investor/>
    },
    // {
    //     path:"/Resto",
    //     element:<resto/>
    // }
    {
        path:'/log',
        element:<Log/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>

    </>
);
    <RouterProvider router={routes}/>
)
