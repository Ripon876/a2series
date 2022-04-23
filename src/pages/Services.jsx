import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';






function ServicesPage() {



 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/site_settings`)
       .then((data) => {
        setData(data.data)
       })

 }, [])



	return (
		<>
			<Header data={data} />
			<div className="pt-5 mt-3"></div>
			<Services />
			<Footer data={data}  />
		</>
	)
}

export default ServicesPage;