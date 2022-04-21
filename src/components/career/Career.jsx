import React from 'react';
import Opening from "./Opening";
import "./Career.css";

function Career() {
	return (
		<div className="career" id="career">
			<div className="serviceHeader text-center pt-4">
				<h1 className="sectionTitle">Career</h1>
				<p className="text-muted sectionPara">Come Work With Us</p>
			</div>
			<div className="careerContent py-5">
				<div className="container text-center">
				<div className="justify-content-center row">
					<div className="col-lg-9">
						<h1>JOIN US</h1>
					<p>At Enosis, we foster and inspire innovative ideas to support growth and value addition. We are passionate about the work we do. Following a transparent system and keeping the communication channels open, we commute ideas and suggestions within the team. We invest in our people and offer them numerous learning and development opportunities. Join us to be a part of a visionary team.</p>
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