import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home/home';
import Investor from '../src/views/investor/investor';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Home />
    <Investor />
    </>

);