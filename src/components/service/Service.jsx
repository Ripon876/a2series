import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Markup } from 'react-render-markup';
import {Helmet} from "react-helmet";
import './Service.css';






function Service() {

var {serviceName} = useParams();
const [service, setService] = useState();

useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/services/${serviceName}`)
       .then((data) => {
        setService(data.data);
       })

 }, [])


	return (<>
		<Helmet>
            <meta name="title" content={ service?.title} />
            <meta name="description" content={ service?.description} />
            <meta name="keywords" content={ service?.keywords ?  service.keywords : ''} />
        </Helmet>
		<div className="Service">
		<div className="container">
			
		
			<div className="ServiceTitle py-5">
				<h1>{serviceName.replace(/_/g,' ')}</h1>
			</div>
			<div className="ServiceDes">


             <div className="ServiceImg p-5 pb-0 text-center">
             	<img src={service?.img} alt={service?.title} className="img-fluid w-75" />
             </div>




			 <Markup markup={service?.full_description} />
			
			</div>
		</div>
		</div>
		</>
	)
}

export default Service;