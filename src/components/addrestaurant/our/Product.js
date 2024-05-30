import React from 'react';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.css';
import Listings from './image/hand.avif';
import delivery from './image/delivery.avif';
import adverties from './image/adverties.svg';
import event from './image/event.svg';
import veg from './image/veg.svg';


function Product() {
 
    return (
      <>

    <div>
      <p class="category-h">Proteins</p> 
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">

            <img src={Listings} class="d-block w-100" alt="..." />

            <div class="parent">

              <div class="icon1 icon">

                <img src={delivery} class="d-block w-100" alt="..." />

                <h5 class="name">Boat earbuds</h5>
                <h1 class="pname">MRP:₹1000.00 </h1>
                <a href="#">Learn More</a>
              </div>
              <div class="icon1 icon">
                <img src={adverties} alt="" />
                <h5 class="name">JCB 3xd</h5>
                 <h1 class="pname">MRP:₹1000.00</h1> 
                <a href="#">Learn More</a>
              </div>
              <div class="icon1 icon">
                <img src={event} alt="" />
                <h5 class="name">Redchief shoes</h5>
                 <h1 class="pname">MRP:₹1000.00</h1> 
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={veg} alt="..." />
            <div class="parent">

              <div class="icon1 icon">
                <img class="photo" src="./img/hearphone.jpg" alt="" />
                <h5 class="name">Boat earbuds</h5>
                <h1 class="pname">MRP:₹1000.00</h1> 
                <a href="#">Learn More</a>
              </div>
              <div class="icon1 icon">
                <img class="photo" src="./img/jcb.jpg" alt="" />
                <h5 class="name">JCB 3xd</h5>
                 <h1 class="pname">MRP:₹1000.00</h1> 
                <a href="#">Learn More</a>
              </div>
              <div class="icon1 icon">
                <img class="photo" src="./img/boots.jpg" alt="" />
                <h5 class="name">Redchief shoes</h5>
                <h1 class="pname">MRP:₹1000.00</h1> 
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </>

    );
};
export default Product;