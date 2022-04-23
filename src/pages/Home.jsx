import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import Slider2 from '../components/slider2/Slider2';
import About from '../components/about/About';
import Services from '../components/services/Services';
import OurClient from '../components/ourClients/OurClient';
import WeOffer from '../components/weOffer/WeOffer';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';





function Home() {



 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/site_settings`)
       .then((data) => {
        setData(data.data)
       })

 }, [])


	return (
	<>


	<Header data={data}/>
    <Slider />


{/*<Slider2 />*/}

    <About />  
    <Services home />
    <OurClient />
    <WeOffer />
    <Contact />
    <Footer data={data} />

	</>
	)
}

export default Home;