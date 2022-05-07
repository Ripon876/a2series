import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Interns from '../components/interns/Interns';
 

function   InternsPage() {

// id_rsa
// eUX8DS1i}?yF
// 9TcilrjDi8FZ


 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/site_settings`)
       .then((data) => {
        setData(data.data)
       })

 }, [])

document.title =  `${data?.logo ? data.logo.split('/').reverse()[0].split('.')[0] : ''} | Interns `;



	return (
		<>
		   <Header data={data} />
		      <Interns />
		   <Footer  data={data} />
		</>
	)
}

export default  InternsPage;