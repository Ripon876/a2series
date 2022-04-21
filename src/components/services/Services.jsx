import React from 'react';
import {Link} from "react-router-dom";
/*import ServiceItem from './ServiceItem';
import ServiceItem2 from './ServiceItem2';
import ServiceItem3 from './ServiceItem3';*/
import ServiceItem3 from './ServiceItem3';
import ServiceItem4 from './ServiceItem4';
import './Services.css';





function Services({home}) {
	return (
		<div className="services" id="services">
			<div className="serviceHeader text-center pt-4">
				<h1 className="sectionTitle">Our Services</h1>
				<p className="text-muted sectionPara">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.</p>
			</div>
			<div className="serviceContent pt-5 pb-5">
				<div className="container">
					<div className="row justify-content-center">


				<ServiceItem3 title="Mobile App Development"  imgSrc="mobile.png"     para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nullalibero malesuada feugiat. Curabitur non nulla." img="" />
				<ServiceItem3 title="Software Development"  imgSrc="pc.png"     para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nullalibero malesuada feugiat. Curabitur non nulla." img="" />
				<ServiceItem3 title="Digital Marketing"  imgSrc="marketing.png"     para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nullalibero malesuada feugiat. Curabitur non nulla." img="" />
				<ServiceItem3 title="Graphic Design"  imgSrc="graphics.png"     para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nullalibero malesuada feugiat. Curabitur non nulla." img="" />
				<ServiceItem3 title="Web Application"  imgSrc="web-app.png"      para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nullalibero malesuada feugiat. Curabitur non nulla." img="" />
				<ServiceItem3 title="Web Development"  imgSrc="s1.png"      para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nullalibero malesuada feugiat. Curabitur non nulla." img="" />

					</div>
		{/*			{home && <div className="extra text-end">
					<Link to="/services/" className="text-black text-decoration-none">See More</Link>
					</div> }	*/}
					



              <ServiceItem4 title="Mobile App Development" imgSrc="mobile.svg" />
              <ServiceItem4 title="Software Development" scf imgSrc="pc.svg" />
              <ServiceItem4 title="Digital Marketing" imgSrc="marketing.svg" />











				</div>	
			</div>
		</div>
	)
}

export default Services;


