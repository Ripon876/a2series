import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Markup } from 'react-render-markup';
import {Link,useParams} from 'react-router-dom';
import "./CareerDetail.css";


function CareerDetail() {
 var params =  useParams();
 var title = params.title;

 const [data, setData] = useState([]);

 useEffect(() => {
       
    axios.get(`${process.env.REACT_APP_SITE_HOST}/api/careers/${title}`)
    .then((data) => {

	    setData(data.data);

	
    })



 }, [])


	return (
		<div className="careerDetail">
		<div className="container">
			<div className="mt-5 openingHeader pt-5 pb-3">
				<h1>{data?.title ? data.title : ''}</h1>
				<p>{data?.designation ? data.designation : ''}</p>
			</div>	
     

          <div className="openingRequirments">
        	<Markup markup={data?.description ? data.description.substr(0,data?.description.lastIndexOf("<p")) : ""} />
 
          <div className="text-start w-25 py-4">
        	<button className="btn subBtn ">

{data?.form_link ? 
<a href={data.form_link} className="text-decoration-none" target="_blank">Apply Now</a>
  : 
<Link to={`/career/apply?${window.location.href.split("/").pop()}`} className="text-decoration-none">Apply Now</Link>
}


        	
        	</button>
        </div>
       </div>



		</div>

		</div>
	)
}

export default CareerDetail;