import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginLink = () => {
  const { loginWithRedirect } = useAuth0();

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
      onClick={(e) => {
        e.preventDefault(); // Prevent the default link behavior
        loginWithRedirect(); // Trigger the login
      }}
    >
      Log In
    </a>
  );
};

export default LoginLink;
