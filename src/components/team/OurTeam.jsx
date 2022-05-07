import React from 'react';
import TeamMember from './TeamMember';
import './OurTeam.css';

const OurTeam = () => {
  return (
    <div className="container our-team-padding">
      <div className="text-center py-5">
        <h1 className="our-team-text">Meet The Team</h1>
      </div>
      <br />
      <div className='justify-content-center row'>
           
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
       
  
      </div>
    </div>
  );
};

export default OurTeam;