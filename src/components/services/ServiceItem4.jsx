import React from 'react';
import {Link} from "react-router-dom";
import {Fade} from "react-reveal";


function ServiceItem4({service}) {
	return (
		
		
		<div className="justify-content-center py-5 my-3 row">
		<Fade left={service.show_content_first ? false : true} right={service.show_content_first ? true : false}>
			<div className={`col-lg-6 col-md-6 col-sm-10 ${service.show_content_first && 'order-1'} showUp`}>
			    <div className="h-100 position-relative w-100">
			        <div className="serviceImg">
			        	<img src={service.img} alt={service.title} className="img-fluid" />
			        </div>			        	
			    </div>

            </div>
            </Fade>
        <div className="col-lg-6 col-md-6 col-sm-10 showDown">
	        <div className="h-100 position-relative w-100">
	        	<div className="serviceInfo p-3 center ">
	        		<h2>{service.title}</h2>
	        		<p>{service.description}</p>
                  {service.moreDetails && service.full_description ? 	<div className='text-start' ><Link to={service.link} className='seeMore'> See More ...</Link></div>   : ''}  	
	                </div>
	        	</div>   
	        	
        </div>	
		</div>


	)
}

export default ServiceItem4;