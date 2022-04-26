import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './WeOffer.css';
import Offer from './Offer';


function WeOffer() {



 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/what_we_offer`)
       .then((data) => {
        setData(data.data);
       })

 }, [])






	return (
		<div className="weOffer">
			<div className="weOfferHeader text-center">
				<h1 className="bold sectionTitle">{data?.title ? data.title : ''}</h1>
				<p className="m-auto w-75">{data?.short_description ? data.short_description : ''}</p>
			</div>
			<div className="container">
				<div className="weOfferContent">
					<div className="justify-content-between row py-5">

						{data.offers?.map((offer) => 
							<Offer imgSrc={offer.img} title={offer.title} description={offer.description}/>
						)}
									
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeOffer;