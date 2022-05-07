import React from 'react';

function Slide({title,para,img,sif,color}) {

	return (
			<div className="position-relative sliderItem" > 
				   <div className="container sliderInfoContainer">
					<div className="sliderContent row">
					    <div className={`col-lg-7 col-md-6 col position-relative pt-sm-3 showDown ${sif ? `order-1` : ''}`} >
			                <div className="sliderInfo" >
			                 	<h1 style={{color :  color}} >{title}</h1>
			                 	<p style={{color :  color}} >{para}</p>
			                </div>			  	
					   </div>
					    <div className="col-lg-5 col-md-6  order-0 showUp">
					        <div className="sliderImg">
					            <img src={img}  className="img-fluid" alt="Welcome" />
					        </div>		
						</div>
					</div> 
					</div> 
			</div>
	)
}

export default Slide;