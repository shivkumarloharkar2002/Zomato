import './div3.css'
import dining from './img/dining.avif'
import nightclub from './img/nightclubs.avif'
import orderonline from './img/orderonline.avif'

export default function Div3() {
    return (
        <>
            <div className="container_cards">

                <div className="div3">
                    <img className='div3img' src={dining} alt="card1 image" />
                    <div className="divcontent">
                        <h2>Nightlife and clubs</h2>
                        <p>Spend leisure time enjoying the nightlife of Pune</p>
                    </div>
                </div>

                <div className="div3">
                    <img className='div3img' src={orderonline} alt="card1 image" />
                    <div className="divcontent">
                        <h2>Nightlife and clubs</h2>
                        <p>Spend leisure time enjoying the nightlife of Pune</p>
                    </div>
                </div>

                <div className="div3">
                    <img className='div3img' src={nightclub} alt="card1 image" />
                    <div className="divcontent">
                        <h2>Nightlife and clubs</h2>
                        <p>Spend leisure time enjoying the nightlife of Pune</p>
                    </div>
                </div>

            </div>
        </>
    );
}