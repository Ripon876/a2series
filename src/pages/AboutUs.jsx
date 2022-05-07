import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import WhoWeAre from '../components/whoWeAre/WhoWeAre';

 

function AboutUsPage() {
	
 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/site_settings`)
       .then((data) => {
        setData(data.data)
       })

 }, [])

document.title =  `${data?.logo ? data.logo.split('/').reverse()[0].split('.')[0] : ''} | About `;


	return (
		<>
		<Header data={data} />
		<WhoWeAre />
	      <Footer  data={data} />
		</>
	)

}

export default AboutUsPage;