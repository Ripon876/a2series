import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Works from './Works';
import './InternProfile.css';

function InternProfile() {

 const [data, setData] = useState([]);
 const {id} = useParams();



 useEffect(() => {
        
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/interns/${id}`)
       .then((data) => {
        setData(data.data);
       })

 }, [])



	return (
		<div className="internProfile">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 p-4">
					<div className="internPhoto text-center">
						<img className="img-fluid" src={data.img} alt={`${data.name} ${data.position}`} />
					</div>
					</div>
					<div className="col-lg-7 p-4">
						<div className="internInfo p-5">
							<h1 className="bold">{ data?.name ?  data.name : ''}</h1>
							<h3 className="text-secondary">{ data?.position ?  data.position : ''}</h3>
							<p>{ data?.duration ?  data.duration : ''}</p>
							<p className="mt-3">{ data?.description ?  data.description : ''}</p>

							{data?.social_links && <SocialLinks links={data?.social_links} />} 

						</div>
					</div>
				</div>
				<div className="internWorks text-center py-5">
					<h1>AKKAS'S All WORKS</h1>
					<Works projects={data?.projects}/>
				</div>
			</div>
		</div>
	)
}

export default InternProfile;


function SocialLinks({links}){
	
	return (
        <div className="internSocials">
            {links["fb"] !== '' && 
                <a href={links["fb"]}><i className="fa-brands fa-facebook-f"></i></a>
            } 
            {links["instagram"] !== '' && 
                <a href={links["instagram"]}><i className="fa-brands fa-instagram"></i></a>
            } 
            {links["twitter"] !== '' && 
                <a href={links["twitter"]}><i className="fa-brands fa-twitter"></i></a>
            }  
            {links["linkedIn"] !== '' && 
                <a href={links["linkedIn"]}><i className="fa-brands fa-linkedin-in"></i></a>
            } 			
		</div>
		)
}