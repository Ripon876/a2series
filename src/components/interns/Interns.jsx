import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Intern from './Intern';
import './Interns.css';


function Interns() {


 const [data, setData] = useState([]);

 useEffect(() => {
        
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/interns`)
       .then((data) => {
        setData(data.data);
       })

 }, [])



	return (
		<div className="interns my-5">
			<div className="internsHeader text-center">
				<h1 className="sectionTitle bold">Meet Our Interns</h1>
				<p>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.</p>
			</div>
			<div className="internsContent py-5">
				<div className="container">
					<div className="row justify-content-center">

						{data?.map((intern) => 

							<Intern name={intern.name} id={intern._id} position={intern.position} imgSrc={intern.img} />
						
						)}
                         
					</div>
				</div>
			</div>
		</div>
	)
}

export default Interns;