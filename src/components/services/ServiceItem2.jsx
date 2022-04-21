import React from 'react'
import {Link} from "react-router-dom";

//  style={{width : "280px"}}

function ServiceItem2({title,para,icon}) {
	return (
		<div className="col p-3 p-lg-2  item">
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

export default ServiceItem2;