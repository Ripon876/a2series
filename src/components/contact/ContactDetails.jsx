import React from 'react'

function ContactDetails({data}) {
	return (
		<div className="contactDetail">
			 <div className="contactInfo">
			 	<div className="row">
			 		<div className="col-4 text-center p-4">
			 			<i className="fa-solid fa-phone" style={{fontSize : "40px"}}></i>
			 		</div>
			 		<div className="col-8">
			 			<h3>Give us a call</h3>
			 			<p className="m-1">{ data?.number ?  data.number : ''}</p>
			 		</div>
			 	</div>
			 	<div className="row pt-4">
			 		<div className="col-4 text-center p-4">
			 			<i className="fa-solid fa-envelope" style={{fontSize : "40px"}}></i>
			 		</div>
			 		<div className="col-8">
			 			<h3>Send us an email</h3>
			 			<p className="m-1">{ data?.email ?  data.email : ''}</p>
			 		</div>
			 	</div>
			 	<div className="row pt-4">
			 		<div className="col-4 text-center p-4">
			 			<i className="fa-solid fa-location-dot" style={{fontSize : "40px"}}></i>
			 		</div>
			 		<div className="col-8">
			 			<h3>Location</h3>
			 			<p className="m-1">{ data?.address ?  data.address : ''}</p>
			 		</div>
			 	</div>
			 </div>
		</div>
	)
}

export default ContactDetails;