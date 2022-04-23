import React from 'react';
import Opening from "./Opening";
import "./Career.css";

function Career() {
	return (
		<div className="career" id="career">
			<div className="serviceHeader text-center pt-4">
				<h1 className="sectionTitle bold">Career</h1>
				<p className="text-muted sectionPara">Come Work With Us</p>
			</div>
			<div className="careerContent py-5">
				<div className="container text-center">
				<div className="justify-content-center row">
					<div className="col-lg-9">
						<h1>JOIN US</h1>
					<p style={{fontSize: "19px"}}>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus.</p>
					</div>
				</div>
					   


           <div className="openings py-5">
           	    <h1 className="pb-4">CURRENT OPENINGS</h1>

			<Opening title="Software Development Lead"  position="Engineering"/>
			<Opening title="Software Development Lead"  position="Engineering"/>

           </div>



				</div>
			</div>
		</div>
	)
}

export default Career;