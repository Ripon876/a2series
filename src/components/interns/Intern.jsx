import React from 'react';
import {Link} from 'react-router-dom';

function Intern({name,id,position}) {
	return (
		<div className="col-lg-3 col-md-4 col-sm-6 pb-5">
		<Link to={`/interns/${id}`} className="text-decoration-none" >
			<div className="card border-0 bg-transparent" style={{backgroundImage : 'url("./img/intern-bg-light.png")'}}>
				<div className="cardImg">
					<img src="./img/intern.png" className="img-fluid" alt="" />
				</div>
				<div className="card-body">
					<h1 className="card-title">{name}</h1>
					<p className="card-text">{position}</p>
				</div>
			</div>
			</Link>
		</div>
	)
}

export default Intern;