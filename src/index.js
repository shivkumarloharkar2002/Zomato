import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home/home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes}/>
);
