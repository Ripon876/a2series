import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InternProfile from '../components/internProfile/InternProfile';
 

function InternProfilePage() {




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
		    <InternProfile />
		<Footer  data={data} />
		</>
	)
}

export default InternProfilePage;