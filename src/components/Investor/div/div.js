import './Div.css'
import zomato_logo from '../Navbar/img/zomato_logo.webp'
import hyper_logo from '../img/hyper_logo.webp'
import feeding_india from '../img/feeding_india.webp'
import blinkit from '../img/blinkit.webp'
import logo1 from '../img/logo1.webp'
import logo2 from '../img/logo2.webp'
import logo3 from '../img/logo3.webp'
import logo4 from '../img/logo4.webp'
import arro from '../img/arro.webp'


export function Div(propes) {

    return (
        <>
            <div class="color">

                <div class="head">

                    <h1>Better food for more people</h1>
                    <img src={zomato_logo} alt="Zomato Logo" class="logo1" />
                    <img src={hyper_logo} alt="hyper Logo" class="logo1" />

                    <hr />

                    <h1>Instant commerce indistinguishable from magic</h1>
                    <img src={blinkit} alt="blinkit" class="logo1" />

                    <hr />

                    <h1>Make India malnutrition free</h1>
                    <img src={feeding_india} alt="feeding india" class="logo1" />

                </div>


                <div className='card'>

                    <h1 className='H1'><b>Company Overview</b></h1>
                    <div className='box'>
                         <div className='img_color'>
                        <img src={logo1} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Presentation</b></h3>
                        <img src={arro} alt='arrow' className='arrow'/>

                        <div>
                            <h1 className='H1'><b>Q4FY24 results</b></h1>

                            <div className='see'>
                                     <p>see all</p>
                            </div>
                        </div>
                     
                        <div className='box1'>
                        <div className='img_color'>
                        <img src={logo2} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Shareholders' Letter</b></h3>
                        <img src={arro} alt='arrow' className='arrow'/>
                       
                    
                         </div>
                         
                         <div className='box2'>
                         <div className='img_color'>
                        <img src={logo3} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Earnings Call Replay</b></h3>
                        <img src={arro} alt='arrow' className='arrow'/>

                        </div>

                        <div className='box3'>
                        <div className='img_color'>
                        <img src={logo4} alt="blinkit" class="logo2" />
                        </div>
                        <h3><b>Earnings Call Transcript</b></h3>
                        <img src={arro} alt='arrow' className='arrow'/>

                         </div>


                    </div>

                </div>

            </div>
        </>
    )
}