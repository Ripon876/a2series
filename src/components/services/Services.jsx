import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {Fade} from 'react-reveal';
/*import ServiceItem from './ServiceItem';
import ServiceItem2 from './ServiceItem2';
import ServiceItem3 from './ServiceItem3';*/
import ServiceItem3 from './ServiceItem3';
import ServiceItem4 from './ServiceItem4';
import './Services.css';





function Services({home}) {


 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/services`)
       .then((data) => {
        setData(data.data);
       })

 }, [])












	return (
		<Fade>
		<div className="services" id="services">
			<div className="serviceHeader text-center pt-4">
				<h1 className="sectionTitle bold">{data?.title ? data.title : ''}</h1>
				<p className="text-muted sectionPara m-auto w-75">{data?.short_description ? data.short_description : ''}</p>
			</div>
			<div className="serviceContent pt-5 pb-5">
				<div className="container">
					<div className="row justify-content-center">
						{data.srevices?.map((service) => 

							<ServiceItem3 title={service.title}  imgSrc={service.img}     para={service.description}  />

						)}
					</div>

					


              <ServiceItem4 title="Mobile App Development" imgSrc="mobile.svg" />
              <ServiceItem4 title="Software Development" scf imgSrc="pc.svg" />
              <ServiceItem4 title="Digital Marketing" imgSrc="marketing.svg" />




				</div>	
			</div>
		</div>
		</Fade>
	)
}

export default Services;


