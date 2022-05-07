import React from 'react';
import {Link} from "react-router-dom";



function ServiceItem3({title,para,last,imgSrc}) {
	return (
        <div  className={ last ?  'col-6 col-sm-10 p-lg-2'  : 'col col-lg-6 col-md-6 col-sm-10 p-3 p-lg-2'} >
        <Link to={`/service/${title}`} className="text-decoration-none text-black">
			<div className="card text-center p-2 m-auto">
			<div className="row">
			<div style={{width : "35%"}} class="position-relative">
				<div className="cardIcon text-center">
					<img src={imgSrc} alt="" class="img-fluid rounded" />
				</div>
			</div>
				<div style={{width : "65%"}}>
				<div className="card-body text-start">
					<h1 className="card-title">
					    {title}
					</h1>
					<p className="card-text">{para}</p>
				</div>					
				</div>

			</div>
			
				
			</div>
			</Link>
		</div>
	)
}

export default ServiceItem3;