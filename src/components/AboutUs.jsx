import React from 'react';
// @ts-ignore
import img from '../assets/aboutUs.png';
import '../styles/aboutUs.css';
import { BsArrowRight } from 'react-icons/bs';


const AboutUs = () => {
  return (
      <section className='aboutUs_section'>
          <div className="aboutUs_wrapper">
              <div className='aboutUs_img--container'>
                  <img src={img} alt="about us" className='aboutUs_img' />
              </div>
              <div className='aboutUs_text--container'>
                  <h6 className='aboutUs_text--h6'>About Us</h6>
                  <h2 className='aboutUs_text--h2'>WORK WITH TRIED AND TRUE DIGITAL EXPERTS</h2>
                  <p className='aboutUs_text--p'>Established in early 2017 and headquartered in Kochi, India, Torc Infotech brings together a team of highly driven professionals with years of in-depth experience in the IT and business space. Our mission is to help organizations leverage digital potential to its maximum efficiency. At Torc Infotech, our relentless aim is to innovate technology solutions that enhance customer experiences and bring the world closer to the mainstream adoption of digitalization and automation technology practices.
                    <br />
                    <br />
                    Torc Infotech has a complete set of services to accomplish your unique technology and business requirements. From business analytics and consultation to platform development, our team is fully equipped to tackle any challenge, while always being available for maintenance and support. Additionally, we provide advisory and educational services to those new to the digitization and automation space.</p>
                  <button className='aboutUs_text--button'>Discover More<BsArrowRight /></button>
              </div>
          </div>
    </section>
  )
}

export default AboutUs