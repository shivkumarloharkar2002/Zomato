
import React from 'react';
import './resto.css';
import addrestaurant from './components/addrestaurantheader';
import MainContent from './components/MainContent';
import Steps from './components/Steps';

function resto() {
  return (
    <div className="resto">
      <Header />
      <MainContent />
      <Steps />
    </div>
  );
}
