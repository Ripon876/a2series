import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ApplicationForm from '../components/career/ApplicationForm';
 

function   JoiningForm() {

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
		    <ApplicationForm />
			<Footer data={data} />
		</>
	)
}

export default  JoiningForm;