import React from 'react'

function ContactDetails() {
	return (
		<div className="contactDetail">
			 <div className="contactInfo">
			 	<div className="row">
			 		<div className="col-4 text-center p-4">
			 			<i class="fa-solid fa-phone" style={{fontSize : "40px"}}></i>
			 		</div>
			 		<div className="col-8">
			 			<h3>Give us a call</h3>
			 			<p className="m-1">+88 01713067024</p>
			 			<p>+88 01717036828</p>
			 		</div>
			 	</div>
			 	<div className="row pt-4">
			 		<div className="col-4 text-center p-4">
			 			<i class="fa-solid fa-envelope" style={{fontSize : "40px"}}></i>
			 		</div>
			 		<div className="col-8">
			 			<h3>Send us an email</h3>
			 			<p className="m-1">conatact@a2web.com</p>
			 		</div>
			 	</div>
			 	<div className="row pt-4">
			 		<div className="col-4 text-center p-4">
			 			<i class="fa-solid fa-location-dot" style={{fontSize : "40px"}}></i>
			 		</div>
			 		<div className="col-8">
			 			<h3>Location</h3>
			 			<p className="m-1">14-15 No. Yea Khaja Bhaban, 1 No. Super Market, Mirpur-1, Dhaka-1216</p>
			 		</div>
			 	</div>
			 </div>
		</div>
	)
}

export default ContactDetails;