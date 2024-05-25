import React from 'react';
import ReactDOM from 'react-dom/client';
import './investor.css';
import Navbar from '../../components/Investor/Navbar';
import Investor from '../src/views/investor/investor';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <>
    <Navbar/>
    <Investor />
    </>
);


 

