import React from 'react';
import './Happy.css';
import 'bootstrap/dist/css/bootstrap.css';
import pawan from './image/PawanKumar.png';
import tushar from './image/Tushar..png'
import jasmeet from './image/Jasmeet..png'

function Happy() {


    return (
        <>
            <div className="carouseldiv">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    
                    <div className="carousel-inner">
                    <div className="carousel-item active ">
                            <img className="d-block w-100" src={pawan} alt="First slide" />
                            <div className="para">


                                <div>
                                    <p className=" title">"Good Food, Great Service and Amazing Staff
                                        A really Lovely Experience
                                        Lotus Cafe is always worth a Visit No Doubt.
                                        of
                                        treatment offered by the doctors and support staff. I would always recommend this
                                        hospital
                                        to my
                                        friends and associates."</p>
                                    <h5 className="text-center ">- Sushila shine, mumbai </h5>
                                </div>
                            </div>


                        </div>
                        <div className="carousel-item ">
                            <img className="d-block w-100" src={tushar} alt="Second slide" />
                            <div className="para">

                                <div>
                                    <p className=" w-50 text-center mx-auto mt-5 mb-4">"Recently my father was admitted in Charnock
                                        Hospital, New Town Rajarhat-Both my father and I were extremely satisfied with the
                                        quality
                                        of
                                        treatment offered by the doctors and support staff. I would always recommend this
                                        hospital
                                        to my
                                        friends and associates."</p>
                                    <h5 className="text-center "> Sen, Pune </h5>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item ">
                            <img className="d-block w-100" src={jasmeet} alt="Third slide" />
                            <div className="para">

                                <div>
                                    <p className=" w-50 text-center mx-auto mt-5 mb-4">"This cafe is huge and the ambience is
                                        vibrant.
                                        The food was good and the service thoughtful and prompt. I guess the action that made my
                                        view about the experience so delightful is that one of my family members was fasting
                                        which
                                        the lady manager
                                        treatment offered by the doctors and support staff. I would always recommend this
                                        hospital
                                        to my
                                        friends and associates."</p>
                                    <h5 className="text-center ">-Elon musk, Pune </h5>
                                </div>
                            </div>

                        </div>
                    </div>

                    <a />
                </div>
            </div>
        </>

    );
};
export default Happy;

