import React from 'react'
import './AboutUs.css'
import Footer from '../Footer/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const AboutUs = () => {
  return (
    <>
    <div className='AboutUs'>
        <div className='container-about'>
            <div className='Title-about'>
                <h1>about us</h1>
            </div>
            <div className='content-about'>
                <div className='article-about'>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi
                         aliquid nihil cumque ipsam facere aperiam at!
                         Ea dolorem ratione sit debitis deserunt repellendus
                          numquam ab vel perspiciatis corporis!</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi
                         aliquid nihil cumque ipsam facere aperiam at!
                         Ea dolorem ratione sit debitis deserunt repellendus
                          numquam ab vel perspiciatis corporis!</p>
                    <div className='btn-about'>
                        <a href="">Read more</a>
                    </div>      
                </div>
            </div>
            <div className='image-section'>
                <img src='img Aboutus.jpeg'></img>
            </div>
           
        </div>
        <div className='social-icon'>
           <Footer/>
        </div>
        
    </div>
    
    </>
  )
}

export default AboutUs