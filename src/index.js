import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddRestaurantHeader from './views/addrestaurant/addrestaurant';
import Home from './views/home/home'
b54ae8f8ad1f0c7254cd8741bbdc117c81f7f391


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AddRestaurantHeader/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



