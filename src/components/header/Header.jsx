import React,{useRef} from 'react';
// import TopBar from './TopBar';
import {Link} from "react-router-dom";
import './Header.css';

function Header() {
const nav  = useRef(null);

function toggleHeight(){
/*	if(nav.current.style.height == "auto"){
		nav.current.style.height = "90px"
	}else{
		nav.current.style.height = "auto"
	}
*/ 
}
		return (
		<>
		   <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top bg-dark">
				
				<div className="container d-flex justify-content-between">
				    <div className="contact-info mr-auto">
				        <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@tech.com</a>
				        <i className="icofont-phone"></i> +1 5589 55488 55
				    </div>
				    <div className="social-links">
				        <a href="#" className="twitter"><i className="fa-brands fa-facebook-f"></i></a>
				        <a href="#" className="facebook"><i className="fa-brands fa-instagram"></i></a>
				        <a href="#" className="instagram"><i className="fa-brands fa-twitter"></i></a>
				    </div>
			
				</div>
			</div>
			<header id="header" className="fixed-top"> 
					<nav className="navbar navbar-expand-lg py-3" ref={nav}>
					  <div className="container">
					    <a className="navbar-brand" href="#">Logo</a>
					    <button className="navbar-toggler" onClick={toggleHeight} type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					      <span className="navbar-toggler-icon"></span>
					    </button>
					    <div className="collapse navbar-collapse" id="navbarResponsive">
					      <ul className="ms-auto navbar-nav text-center">
					        <li className="nav-item active">
					          <a className="nav-link" href="/#">Home</a>
					        </li>
					        <li className="nav-item">
					          <a className="nav-link" href="/#about">About</a>
					        </li>
					        <li className="nav-item">
					          <a className="nav-link" href="/#services">Services</a>
					        </li>
					        <li className="nav-item">
					          <a className="nav-link" href="/career#career">Career</a>
					        </li>
					        <li className="nav-item">
					          <a className="nav-link" href="/#contact">Contact</a>
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