import React from 'react';
import {Link} from "react-router-dom";

// col-lg-3 col-md-6 col-sm-10 p-3 p-lg-2


function ServiceItem({title,para,last}) {
	return (
        <div  className={ last ?  'col-10  p-lg-2'  : 'col col-lg-5 col-md-5 col-sm-10 p-3 p-lg-2'} >
        <Link to={`/service/${title}`} className="text-decoration-none text-black">
			<div className="card text-center p-2 m-auto">
				<div className="cardIcon text-center">
						<img src="./img/s1.png" alt="" class="img-fluid rounded" />
				</div>
				<div className="card-body">
					<h1 className="card-title">
					    {title}
					</h1>
					<p className="card-text">{para}</p>
				</div>
			</div>
			</Link>
		</div>
	)
}

export default ServiceItem;