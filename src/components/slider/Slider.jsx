import React,{useState,useEffect} from 'react';
import Carousel from 're-carousel';
import axios from 'axios';
import IndicatorDots from './IndicatorDots';
import Buttons from './Buttons';
import Slide from './Slide';
import './Slider.css';


function Slider() {
 



 const [slider, setSlider] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/slides`)
       .then((data) => {
        setSlider(data.data)
       })

 }, [])








 var sample_para = 'Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh.'

	return (
		<div className="slider">
			<Carousel auto loop={true} widgets={[IndicatorDots]}  axis={slider?.axis} interval={slider.slide_duration}>
				{slider.slides?.map((slide) => 

				<Slide  title={slide.title} sif={slide.show_img_first ? true : false} para={slide.description} img={slide.img} color={slide.color}  />

				     
				)}
			</Carousel>
		</div>
	)
}

export default Slider;