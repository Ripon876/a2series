import React from 'react';
import Works from './Works';
import './InternProfile.css';

function InternProfile() {
	return (
		<div className="internProfile">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 p-4">
					<div className="internPhoto">
						<img className="img-fluid" src="https://o.remove.bg/downloads/882f014f-b0cc-479a-a42a-a24fec35ad49/team-meet1.8f6e7dc4-removebg-preview.png" alt="" />
					</div>
					</div>
					<div className="col-lg-7 p-4">
						<div className="internInfo p-5">
							<h1 className="bold">AKKAS AL</h1>
							<h3 className="text-secondary">Frontend Developer</h3>
							<p>Duration: 4 Month (September 2021-December 2021)</p>
							<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos laborum quidem magnam rem quo ducimus veritatis. Iusto iure, dolorum similique qui quos nobis, adipisci enim ipsa possimus sapiente hic doloremque quae reiciendis. Ipsa incidunt nemo amet ipsum hic modi repudiandae recusandae odio voluptates cumque, totam sint ad similique laboriosam</p>
							<div className="internSocials">
								<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
								<a href="#"><i class="fa-brands fa-instagram"></i></a>
								<a href="#"><i class="fa-brands fa-twitter"></i></a>
								<a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="internWorks text-center py-5">
					<h1>AKKAS'S All WORKS</h1>
					<Works />
				</div>
			</div>
		</div>
	)
}

export default InternProfile;