import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Get started with online ordering</h2>
      <ul>
        <li>FSSAI license copy</li>
        <li>PAN card copy</li>
        <li>Regular GSTIN</li>
        <li>Bank account details</li>
        <li>Your restaurant menu</li>
        <li>Dish images for top 5 items</li>
      </ul>
      <section className="why-partner">
        <h2>Why should you partner with Zomato?</h2>
        <p>Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
        <div className="stats">
          <div>1000+ cities in India</div>
          <div>3 lakh+ restaurant listings</div>
          <div>5.0 crore+ monthly orders</div>
        </div>
      </section>
    </main>
  );
};
