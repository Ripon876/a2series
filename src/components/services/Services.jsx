import React from 'react';
import {Link} from "react-router-dom";
import ServiceItem from './ServiceItem';
import ServiceItem2 from './ServiceItem2';
import ServiceItem3 from './ServiceItem3';
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

					{/*<ServiceItem title="Service title 1" icon="fa-solid fa-code" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.icies ligula sed magna dictum porta."/>
						<ServiceItem title="Service title 2" icon="fa-solid fa-code" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.icies ligula sed magna dictum porta."/>
						<ServiceItem title="Service title 3" icon="fa-solid fa-code" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.icies ligula sed magna dictum porta."/>
						<ServiceItem title="Service title 4" icon="fa-solid fa-code" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.icies ligula sed magna dictum porta."/>
					*/}
{/*

                  <ServiceItem title="Service title 1" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus "/>
                  <ServiceItem title="Service title 2"  para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus "/>
                  <ServiceItem title="Service title 2"  para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus "/>
                  <ServiceItem title="Service title 2"  para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus "/>
                  <ServiceItem title="Service title 2" last para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus "/>

                  */}


<ServiceItem3 title="Service title 1" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla" img="" />
<ServiceItem3 title="Service title 1" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla" img="" />
<ServiceItem3 title="Service title 1" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla" img="" />
<ServiceItem3 title="Service title 1" para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla" img="" />
<ServiceItem3 title="Service title 1" last para="Cras ultrNulla quis lorem ut libero malesuada feugiat. Curabitur non nulla" img="" />



					</div>
		{/*			{home && <div className="extra text-end">
					<Link to="/services/" className="text-black text-decoration-none">See More</Link>
					</div> }	*/}
					
				</div>	
			</div>
		</div>
	)
}

export default Services;


