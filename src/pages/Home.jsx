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




// function getFaviconEl() {
//   return document.getElementById("favicon");
// }

function Home() {

    // const favicon = getFaviconEl(); 
    // favicon.href = "http://localhost:5000/uploads/A2series.png";  
 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/site_settings`)
       .then((data) => {
        setData(data.data)
       })

 }, [])


document.title =  `${data?.logo ? data.logo.split('/').reverse()[0].split('.')[0] : ''} | Home `;

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