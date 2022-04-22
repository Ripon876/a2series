import React from 'react'
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import Slider2 from '../components/slider2/Slider2';
import About from '../components/about/About';
import Services from '../components/services/Services';
import OurClient from '../components/ourClients/OurClient';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';





function Home() {
	return (
	<>


	<Header />
    <Slider />


{/*<Slider2 />*/}

    <About />
    <OurClient />
    <Services home />

    <Contact />
    <Footer />

	</>
	)
}

export default Home;