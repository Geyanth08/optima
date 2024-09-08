import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, role, branch, imgSrc }) => {
  return (
    <div className="team-member">
      <img src={imgSrc} alt={name} />
      <h4>{name}</h4>
      {role && <p>{role}</p>} {/* Role is optional, so only render if it exists */}
      <p>{branch}</p>
    </div>
  );
};

export default TeamMember;
