import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';


   

import AuthNav from '../auth-nav';


const { primary_accent_color } = colors;

function HeaderContent() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      backgroundColor: primary_accent_color,
      height: '10vh',
    }}
  >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={75} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div className="navbar-brand logo">
      <AuthNav />
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Profile
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
      </div>
    </div>
  );
}

export { HeaderContent };


/*


import MainNav from './main-nav';
import AuthNav from './auth-nav';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
*/