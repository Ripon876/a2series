import React from 'react'

function TopBar() {
	return (
		<div id="topbar" class="d-none d-lg-flex align-items-center fixed-top bg-dark">
		    <div class="container d-flex">
		      <div class="contact-info mr-auto">
		        <i class="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@tech.com</a>
		        <i class="icofont-phone"></i> +1 5589 55488 55
		      </div>
		      <div class="social-links">
		        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
		        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
		        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
		        <a href="#" class="skype"><i class="icofont-skype"></i></a>
		        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
		      </div>
		    </div>
	    </div>
		 
	)
}

export default TopBar;