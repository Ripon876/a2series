import React from 'react';
import Intern from './Intern';
import './Interns.css';


function Interns() {
	return (
		<div className="interns my-5">
			<div className="internsHeader text-center">
				<h1 className="sectionTitle bold">Meet Our Interns</h1>
				<p>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.</p>
			</div>
			<div className="internsContent py-5">
				<div className="container">
					<div className="row justify-content-center">
                         <Intern name="John Doe" id="343643" position="Frontend Developer" />
                         <Intern name="John Doe" id="343643" position="Frontend Developer" />
                         <Intern name="John Doe" id="343643" position="Frontend Developer" />
                         <Intern name="John Doe" id="343643" position="Frontend Developer" />
                         <Intern name="John Doe" id="343643" position="Frontend Developer" />
                         <Intern name="John Doe" id="343643" position="Frontend Developer" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Interns;