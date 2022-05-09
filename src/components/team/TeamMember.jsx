import React from 'react'

function TeamMember({member}) {
 
	return (
		<div className="col-lg-3 col-md-5 col-sm-7">
	        <div className="teamMet">
	            <div className="teamImg">
	                <img className="img-fluid" src={member.img} alt="Trainer" />
	            </div>
	            <div className="team-content pt-2">
	                <h6 className="name pt-4">{member.name}</h6>
	                <p className="title">{member.position}</p>
	            </div>
	            <ul className="social">
	         	   <SocialLinks links={member.social_links} />
	            </ul>
	        </div>
        </div>
	)
}

export default TeamMember;



function SocialLinks({links}){
	
	return (
        <div>
            {links["fb"] !== '' && 
                <li><a href={links["fb"]}><i className="fa-brands fa-facebook-f"></i></a></li>
            } 
            {links["instagram"] !== '' && 
                <li><a href={links["instagram"]}><i className="fa-brands fa-instagram"></i></a></li>
            } 
            {links["twitter"] !== '' && 
                <li><a href={links["twitter"]}><i className="fa-brands fa-twitter"></i></a></li>
            }  
            {links["linkedIn"] !== '' && 
                <li><a href={links["linkedIn"]}><i className="fa-brands fa-linkedin-in"></i></a></li>
            } 			
		</div>
		)
}