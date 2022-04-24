import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';
 

function   ContactPage() {




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
			<div className="mt-3" style={{paddingTop : "200px"}}></div>

             <div className="container">
              <div className="pb-4 text-center">
              	<h1 className="sectionTitle bold display-5">Get In Touch</h1>
              </div>
             	<div className="row justify-content-center">
             		<div className="col-lg-4 p-4">
             			<ContactDetails data={data} />
             		</div>
             		<div className="col-lg-7 p-lg-0 p-sm-5">
             			<ContactForm />	
             		</div>
             		
             	</div>
             </div>
              


			
		      
			<Footer  data={data} />
		</>
	)
}

export default  ContactPage;