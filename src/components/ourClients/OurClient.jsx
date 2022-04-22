import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay} from "swiper";
import "./OurClient.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



function OurClient() {
	return (
		<div class="ourClient py-5">
		<div className="ourClientHeader text-center">
			<h1>Our Clients</h1>
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
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div>     
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div>   
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div>     
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="ourClientImg">
        	<img src="./img/c1.png" alt="" className="img-fluid" />
        </div> 
        </SwiperSlide>
      </Swiper>
		</div>
		
		</div>
	)
}

export default OurClient;