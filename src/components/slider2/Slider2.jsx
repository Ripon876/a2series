import React from 'react'
import Carousel from 're-carousel';
import IndicatorDots from '../slider/IndicatorDots';
import './Slider2.css'




function Slider2() {
	return (
		<div className="slider">
			<Carousel auto loop={true} widgets={[IndicatorDots]}  >
              
              <div className="slide2" style={{backgroundImage: "url(./img/banner/1.jpg)"}}>
              <div className="slide2Content">
              	    <h1>Title 1</h1>
              	    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum </p>
              </div>



              </div>  
              <div className="slide2" style={{backgroundImage: "url(./img/banner/2.jpg)"}}>
                 <div className="slide2Content">
              	    <h1>Title 1</h1>
              	    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum </p>
              </div>

              </div>   
              <div className="slide2" style={{backgroundImage: "url(./img/banner/3.jpg)"}}>
               <div className="slide2Content">
              	    <h1>Title 1</h1>
              	    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum </p>
              </div>

              </div>

			</Carousel>
		</div>
	)
}

export default Slider2;