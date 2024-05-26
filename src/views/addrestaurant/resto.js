import React from 'react';
import resto from './resto.css';
import Header from './components/Header';
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

export default resto;