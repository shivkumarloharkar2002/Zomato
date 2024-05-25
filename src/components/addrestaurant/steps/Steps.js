import React from 'react';
import './Steps.css';

const Steps = () => {
  return (
    <section className="steps">
      <h2>How it works?</h2>
      <div className="step">
        <h3>Step 1</h3>
        <p>Create your page on Zomato</p>
      </div>
      <div className="step">
        <h3>Step 2</h3>
        <p>Register for online ordering</p>
      </div>
      <div className="step">
        <h3>Step 3</h3>
        <p>Start receiving orders online</p>
      </div>
    </section>
  );
};

export default Steps;
