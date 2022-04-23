import React from 'react'

function Benefit({title,text,imgSrc}) {
	return (
		<div className="col-lg-6 col-md-6 col-sm-10">
			<div className="card border-0 bg-transparent text-center p-5">
				<div className="iconBox">
					<img src={imgSrc} alt="" className="img-fluid" />
				</div>
				<div className="card-body">
					<h1 className="card-title">{title}</h1>
					<p className="card-text">{text}</p>
				</div>
			</div>
							
		</div>
	)
}

export default Benefit;