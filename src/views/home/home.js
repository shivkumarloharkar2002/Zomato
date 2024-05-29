import './home.css'

import Herosection from '../../components/home/HeroSection/Herosection';
import Div3 from '../../components/home/div3/div3';
import Footer from '../../components/home/footer/footer';
import Collectiondiv from '../../components/home/Collectionsdiv/collectiondiv';
import Popularplace from '../../components/home/popularplace/popularplace';
import Appdiv from '../../components/home/Appdiv/appdiv';
import Explore from '../../components/home/explore/explore';

export default function Home(){
    return(
        <>
        <Herosection/>
        <Div3/>
        <Collectiondiv/>
        <Popularplace/>
        <Appdiv/>
        <Explore/>
        <Footer/>
        </>
    );
}