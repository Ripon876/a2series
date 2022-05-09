import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Markup } from 'react-render-markup';
import Benefit from './Benefit';
import './WhoWeAre.css';

function WhoWeAre() {

 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/about`)
       .then((data) => {
        setData(data.data);
       })

 }, [])



	return (
		<>
		<Helmet>
	          <meta name="title" content={ data.title ?  data.title : ''} />
	          <meta name="description" content={ data.long_descrition ?  data.long_descrition.substr(0,100) : ''} />
	          <meta name="keywords" content={ data.keywords ?  data.keywords : ''} />
	      </Helmet>
		<div className="whoWeAre">
			<div className="whoWeAreHeader text-center pt-4">
				<h1 className="sectionTitle display-4  bold">Who We Are</h1>
				<p className="sectionPara w-75 m-auto py-2"> <Markup markup={data?.long_descrition ? data.long_descrition.substr(0,data?.long_descrition.lastIndexOf("<p")) : ""} /></p>
			</div>
			<div className="container pt-5">
				<div className="ourQualities py-5">
				<h2 className="text-center">BENEFITS OF WORKING WITH US</h2>
					<div className="justify-content-center row">

						{data.benefits?.map((benefit)=>
						    <Benefit title={benefit.title} imgSrc={benefit.img} text={benefit.description} />
						)}

					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default WhoWeAre;