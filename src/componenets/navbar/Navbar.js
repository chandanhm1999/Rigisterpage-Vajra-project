import React from 'react';
import './Navbar.css';
import logo from "../../assets/img/logo.png";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
  const isMobileView = useMediaQuery('(max-width:600px)');

  return (
    <div className='nav_card'>
      <div className='nav_logo'>
        <img src={logo} alt='' />
      </div>
      <div className='logout'>
        <Grid item xs={8}>
          {isMobileView ? (
            <div className='home_part'><HomeOutlinedIcon /></div>
          ) : (
            <LoginOutlinedIcon />
          )}
        </Grid>
        <div className='log_out'>
          {isMobileView ? '' : 'Log Out'}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
