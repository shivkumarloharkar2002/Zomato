
import React from 'react';
import ReactDOM from 'react-dom/client';


const routes=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    // {
    //     path:'/investor',
    //     element:<Investor/>
    // },
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
