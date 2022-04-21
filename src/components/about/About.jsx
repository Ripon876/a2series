import React from 'react';
import './About.css';

function About() {
	return (
		<div className="about" id="about">
			<div className="aboutHeader text-center">
				<h1 className="sectionTitle">About</h1>
				<p className="text-muted sectionPara">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.</p>
			</div>
			<div className="aboutContent pt-5">
				<div className="container">
					<div className="row">
                        <div className="col-lg-6 text-center">
                        	<img src="./img/about.svg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-5">
                        <div className="aboutInfo">
                        	<h1>Hi!,</h1>
                        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                        	</p>
                        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus.
                        	</p>
                        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                        	</p>
                        </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;