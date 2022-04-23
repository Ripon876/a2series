import React from 'react';
import {Fade} from 'react-reveal';

function Offer({title,imgSrc,description}) {
	return (
		<Fade bottom >
		<div className="col-lg-5 col-md-5 col-sm-10  m-auto py-5">
			<div className="offer">
				<div className="bg-transparent border-0 card">
					<img src={imgSrc} alt="" className="img-fluid" />
				
                    <div className="card-body mt-3">
                    	<h1 className="card-title">{title}</h1>
                    	<p className="card-text">{description}</p>
                    </div>

				</div>
			</div>
		</div>
		</Fade>
	)
}

export default Offer;