import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './profile.css'; 

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={picture}
          alt="Profile"
          className="profile-picture"
        />
        <h2>{name}</h2>
        <p className="lead text-muted">{email}</p>
      </div>

      <div className="profile-info">
        <div className="info-item">
          <h4>Full Name:</h4>
          <p>{name}</p>
        </div>
        <div className="info-item">
          <h4>Email Address:</h4>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
