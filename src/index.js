import React from 'react';
import ReactDOM from 'react-dom/client';
import  { Log } from './views/Log/Log';
import { Log2 } from './views/Log/Log2';
import { Sign } from './views/Signup/Sign';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <Log/>
   <Log2/>
   <Sign/>
    </>
);