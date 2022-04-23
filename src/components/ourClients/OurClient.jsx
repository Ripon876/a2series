import React,{useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from "swiper";
import axios from 'axios';
import {Fade} from "react-reveal";
import "./OurClient.css"
import "swiper/css";
import "swiper/css/navigation";



function OurClient() {



 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/clients`)
       .then((data) => {
        setData(data.data);
       })

 }, [])



	return (
<Fade>
		<div class="ourClient py-5">
		<div className="ourClientHeader text-center">
			<h1 className="sectionTitle bold">Our Clients</h1>
			<p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.</p>
		</div>
		<div className="container">
			<Swiper 
		navigation={true}
		modules={[Autoplay,Navigation]}
		loop={true}
		className="mySwiper py-5"
		// slidesPerView={3}
		autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}



	breakpoints={{
	    // when window width is >= 640px
	    640: {
	      width: 640,
	      slidesPerView: 1,
	    },
	    // when window width is >= 768px
	    768: {
	      width: 768,
	      slidesPerView: 2,
	    },
	  }}
		>

		{data.clients?.map((clientLogo) => 
		    <SwiperSlide>
		        <div className="ourClientImg">
		        	<img src={clientLogo}  alt="" className="img-fluid" />
		        </div>
		    </SwiperSlide>
		)}


      </Swiper>
		</div>
		
		</div>
		</Fade>
	)
}

export default OurClient;