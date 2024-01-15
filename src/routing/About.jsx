import React from 'react';
import abt_img from '../images/nailart.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import AboutImg from './AboutImg';
import InstagramIcon from '@mui/icons-material/Instagram';

function About(props) {


  return (
    <>
      <h1 className='abt_heading'>About Me</h1>
      <div className='about_container'>
        <div className='about_img'>
          <img src={abt_img} alt='about_image' />
        </div>
        <div className='about_content'>
          <h1>[Name]</h1>
          <h2>Contact Our Salon</h2>
          <h3>Join us at [Your Beauty Parlour Name], where beauty is not just a treatment—it's an experience. Let us be your partners in unlocking the beauty that lies within. Book your appointment today and embark on a transformative journey towards a more beautiful and confident you.</h3>
          <p><LocationOnIcon />   Suhag Nagar, Firozabad - 283203</p>
          <p><PhoneAndroidIcon />   Phone Number</p>
          <p><EmailIcon />   parlour@gmail.com</p>
        </div>
      </div>
      <div className='abt_Img'>
        <div className='Img_container'>
          <div className='ad'>
            <h1>Follow me on <strong className='insta'> Instagram </strong></h1>
            <h2><InstagramIcon /> manankumar_06</h2>
          </div>
          {
            AboutImg.map((val, ind) => {
              return <img src={val.imgSrc} alt="abt_img" />
            })
          }
        </div>
      </div>
    </>
  );
}

export default About;