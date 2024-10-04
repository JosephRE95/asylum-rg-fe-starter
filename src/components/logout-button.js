// src/components/logout-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <a
      href="#"
      style={{ 
        backgroundColor: '#404c4a', 
        color: 'white',
        padding: '10px 75px', 
        display: 'inline-block',
        textDecoration: 'none',
        borderRadius: '5px'
      }}
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </a>
  );
};

export default LogoutButton;