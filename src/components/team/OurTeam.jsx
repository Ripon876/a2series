import React ,{useEffect,useState} from 'react';
import axios from 'axios'
import TeamMember from './TeamMember';
import './OurTeam.css';

const OurTeam = () => {





 const [data, setData] = useState([]);

 useEffect(() => {
       
       axios.get(`${process.env.REACT_APP_SITE_HOST}/api/team`)
       .then((data) => {
        setData(data.data);
       })

 }, [])








  return (
    <div className="container our-team-padding">
      <div className="text-center py-5">
        <h1 className="our-team-text">Meet The Team</h1>
      </div>
      <br />



{data?.map((member)=> 

 <>
    {member.isCeo &&  <div class="row">
  <div class="col-lg-5 p-5">
    <div class="internPhoto text-center">
        <img class="img-fluid" alt="dsfdsf dsfdsfdfds" src={member.img} />
    </div>
  </div>
  <div class="col-lg-7 p-4">
    <div class="internInfo p-5">
    <h1 class="bold">{member.name}</h1>
    <h3 class="text-secondary">{member.position}</h3>
    
    <p class="mt-3" style={{fontSize : '18px'}} >{member.description}</p>
      <SocialLinks links={member.social_links} />
     </div>
  </div>
</div>  }

 </>

)}




      <div className='justify-content-center row mt-2 py-5' >
     { data?.map((member)=> 
<>
  {!member.isCeo &&   <TeamMember member={member} />}

</>
    
    
      )}
       
  
      </div>
  
    </div>
  );
};

export default OurTeam;


function SocialLinks({links}){
  
  return (
        <div className='internSocials'>
            {links["fb"] !== '' && 
                <a href={links["fb"]}><i className="fa-brands fa-facebook-f"></i></a>
            } 
            {links["instagram"] !== '' && 
                <a href={links["instagram"]}><i className="fa-brands fa-instagram"></i></a>
            } 
            {links["twitter"] !== '' && 
                <a href={links["twitter"]}><i className="fa-brands fa-twitter"></i></a>
            }  
            {links["linkedIn"] !== '' && 
                <a href={links["linkedIn"]}><i className="fa-brands fa-linkedin-in"></i></a>
            }       
    </div>
    )
}