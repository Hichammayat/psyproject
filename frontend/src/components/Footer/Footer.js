import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
          <div className='social-links'>
          <FacebookIcon style={{color:"black"}}/>
          <InstagramIcon style={{color:"black"}}/>
          <LinkedInIcon style={{color:"black"}}/>
          </div>
        </div>
    </div>
  )
}
export default Footer