import './home.css'

import Herosection from '../../components/home/HeroSection/Herosection';
import Div3 from '../../components/home/div3/div3';
import Footer from '../../components/home/footer/footer';

export default function Home(){
    return(
        <>
        <Herosection/>
        <Div3/>
        <Footer/>
        </>
    );
}