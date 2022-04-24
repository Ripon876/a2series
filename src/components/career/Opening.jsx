import React from 'react';
import {Link} from 'react-router-dom';


function Opening({title,position}) {

	return (
		<div className="row border-bottom m-auto mb-3">
			<div className="col-lg-6 col">
				<div className="opening text-start">
					<h2>{title}</h2>
					<p>{position}</p>
				</div>
			</div>
			<div className="col-lg-6 col text-end">
			<Link to={`/career/${title.replace(/ /g,"_")}`}>
					<button className="btn">See More</button>
				</Link>
			</div>
		</div>
	)
}

export default Opening;