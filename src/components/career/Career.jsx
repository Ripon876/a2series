import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Opening from "./Opening";
import "./Career.css";

function Career() {




 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/careers`)
       .then((data) => {
        setData(data.data);
       })

 }, [])





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
						<h1>{data?.title ? data.title : ''}</h1>
					<p style={{fontSize: "19px"}}>{data?.description ? data.description : ''}</p>
					</div>
				</div>
					   


           <div className="openings py-5">
           	    <h1 className="pb-4">CURRENT OPENINGS</h1>
{data.openings?.map((opening) => 

	<Opening title={opening.title}  position={opening.designation} link={opening.link}/>

)}
			
			{/*<Opening title="Software Development Lead"  position="Engineering"/>*/}

           </div>



				</div>
			</div>
		</div>
	)
}

export default Career;