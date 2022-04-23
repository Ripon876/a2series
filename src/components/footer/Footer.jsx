import React from 'react';
import "./Footer.css";


function Footer({data}) {

	return (
		<div className="footer">
			    <footer className="footer-container">
      
      <div className="container">
        <div className="row">
          <div className="col-md-4 pr-md-5">
            <a href="#" className="footer-site-logo d-block mb-4">{ data?.logo ? data.logo : 'logo'}</a>
            <p className="text-white">{ data?.description ? data.description : 'Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum cong'}</p>
          </div>
          <div className="col-md">
            <ul className="list-unstyled nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="list-unstyled nav-links">
              <li><a href="#">Clients</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="list-unstyled nav-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="col-md text-md-center">
            <ul className="social list-unstyled">
              <li><a href={ data?.social_links ? data.social_links.fb : 'https://facebook.com'} ><i className="fa-brands fa-facebook-f"></i></a></li>
              <li><a href={ data?.social_links ? data.social_links.instagram : 'https://instagram.com'} ><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href={ data?.social_links ? data.social_links.twitter : 'https://twitter.com'} ><i className="fa-brands fa-twitter"></i></a></li>
            </ul>
            <p className=""><a href="#contact" className="btn btn-tertiary">Contact Us</a></p>
          </div>

			<div className="copyright py-3 text-center">
				<p className="m-0">
					<small>© 2022 All Rights Reserved.</small>
				</p>
			</div>
        </div> 

{/*        <div className="row ">
          <div className="col-12 text-center">
            <div className="copyright mt-5 pt-5">
              <p><small>&copy; 2019-2020 All Rights Reserved.</small></p>
            </div>
          </div>
        </div> */}
      </div>
      
    </footer>

		</div>
	)
}

export default Footer;