import React from 'react';
import {Link} from "react-router-dom";
import {Fade} from "react-reveal";


function ServiceItem4({title,para,scf,imgSrc}) {
	return (
		<Fade duration={1000}>
		<div className="justify-content-center py-5 my-3 row">
			<div className={`col-lg-6 col-md-6 col-sm-10 ${scf && 'order-1'}`}>
			    <div className="h-100 position-relative w-100">
			        <div className="serviceImg">
			        	<img src={`./img/${imgSrc}`} alt={title} className="img-fluid" />
			        </div>			        	
			    </div>

            </div>
        <div className="col-lg-6 col-md-6 col-sm-10">
	        <div className="h-100 position-relative w-100">
	        	<div className="serviceInfo p-3 center">
	        		<h2>{title}</h2>
	        		<p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque</p>
	        	</div>        	
	        </div>
        </div>	
		</div>
</Fade>
	)
}

export default ServiceItem4;