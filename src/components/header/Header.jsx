import React,{useRef} from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import './Header.css';

function Header({data}) {
const nav  = useRef(null);



		return (
		<>
		 <Helmet>
            <meta name="description" content={ data.description ?  data.description : ''} />
            <meta name="keywords" content={ data.keywords ?  data.keywords : ''} />
         </Helmet>
		   <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top bg-dark">
				
				<div className="container d-flex justify-content-between">
				    <div className="contact-info mr-auto">
				        <i className="icofont-envelope"></i> <a href={`mailto:${data?.email ? data.email : ''}`}>{ data?.email ? data.email : ''}</a>
				        <i className="icofont-phone"></i> { data.number ?  data.number : ''}
				    </div>
				    <div className="social-links">
				        <a href={ data?.social_links ?  data.social_links.fb : 'https://facebook.com'} className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
				        <a href={ data?.social_links ?  data.social_links.instagram : 'https://instagram.com'} className="instagram"><i className="fa-brands fa-instagram"></i></a>
				        <a href={ data?.social_links ?  data.social_links.twitter : 'https://twitter.com'} className="twitter"><i className="fa-brands fa-twitter"></i></a>
				    </div>
			
				</div>
			</div>
			<header id="header" className="fixed-top"> 
					<nav className="navbar navbar-expand-lg py-3" ref={nav}>
					  <div className="container">
					    <Link className="navbar-brand ps-2" to="/"><img src={data?.logo} className='img-fluid' alt="" /></Link>
					    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					      <span className="navbar-toggler-icon"></span>
					    </button>
					    <div className="collapse navbar-collapse" id="navbarResponsive">
					      <ul className="ms-auto navbar-nav text-center">
					        <li className="nav-item active">
					          <Link className="nav-link" to="/">Home</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/about">About</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/services">Services</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/team">Our Team</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/career">Career</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/interns">Interns</Link>
					        </li>
					        <li className="nav-item">
					          <Link className="nav-link" to="/contact">Contact</Link>
					        </li>
					      </ul>
					    </div>
					  </div>
					</nav>
		    </header>
		</>
			)


}

export default Header;