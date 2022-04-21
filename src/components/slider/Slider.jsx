import React from 'react';
import Carousel from 're-carousel';
import IndicatorDots from './IndicatorDots';
import Buttons from './Buttons';
import Slide from './Slide';
import './Slider.css';

//
//  style={{backgroundImage: 'url(https://img.freepik.com/free-photo/low-angle-greyscale-shot-airplane-flying-high-rise-buildings_181624-18257.jpg)'}}
 // style={{backgroundImage: 'url(https://img.freepik.com/free-photo/misty-forest-black-white_53876-145554.jpg)'}}

function Slider() {
 
 var sample_para = 'Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh.'

	return (
		<div className="slider">
			<Carousel auto loop={true} widgets={[IndicatorDots]}  >
				<Slide   title="Title 1" para={sample_para} img="./img/1.svg"/>
				<Slide sif title="Title 2"   para={sample_para}  img="./img/2.svg"/>
				<Slide  title="Title 3" para={sample_para}   img="./img/3.svg"/>
			</Carousel>
		</div>
	)
}

export default Slider;