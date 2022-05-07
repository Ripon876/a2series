import React,{useState}  from 'react';
import axios from 'axios';
import {Fade} from 'react-reveal';
import ContactForm from './ContactForm';
import './Contact.css';


function Contact() {

	return (
		<Fade>
		<div className="contact" id="contact">
			<div className="contactHeader text-center pt-4">
				<h1 className="sectionTitle bold">Contact Us</h1>
				<p className="text-muted sectionPara">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.</p>
			</div>
           <div className="container">
               <div className="row justify-content-center">
                   <div className="col-lg-7">
                      <ContactForm />  
                   </div>
               </div>
           </div>
               
        
				
		</div>
		</Fade>
	)
}

export default Contact;