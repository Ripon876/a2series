import React from 'react'

function TeamMember() {
	return (
		<div className="col-md-3">
	        <div className="teamMet">
	            <div className="teamImg">
	                <img className="img-fluid" src="https://a2series.com/static/media/team-meet1.8f6e7dc4.jpg" alt="Trainer" />
	            </div>
	            <div className="team-content pt-2">
	                <h6 className="name pt-4">Farihan Rahman priom</h6>
	                <p className="title">Sr Backend Developer</p>
	            </div>
	            <ul className="social">
	                <li><a href="https://google.com" aria-hidden="true"><i class="fa-brands fa-facebook-f"></i></a></li>
	                <li><a href="https://facebook.com" aria-hidden="true"><i class="fa-brands fa-twitter"></i></a></li>
	                <li><a href="https://instagram.com" aria-hidden="true"><i class="fa-brands fa-instagram"></i></a></li>
	                <li><a href="https://linkedin.com" aria-hidden="true"><i class="fa-brands fa-linkedin-in"></i></a></li>
	            </ul>
	        </div>
        </div>
	)
}

export default TeamMember;