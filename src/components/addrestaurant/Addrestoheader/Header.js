import React from 'react';
import './Header.css';
// import ReactDOM from 'react-dom/client';
import background from './../img/background.webp';


function Header (){
  return (
    <div className='background'>
    <header className="header">
      <h1>Zomato for Business</h1>
      <div className="header-content">
        <h2>Partner with Zomato at 0% commission for the 1st month!</h2>
        <button>Register your restaurant</button>
        <button>Login to view your existing restaurants</button>
        <p>Need help? Contact +91 97-38-38-38-38</p>
      </div>
    </header>
  </div>
  );
};

export default Header;
