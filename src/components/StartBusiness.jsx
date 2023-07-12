import React from 'react';
import '../styles/startBusiness.css';
// @ts-ignore
import bgImg from '../assets/start_bg.png'


const StartBusiness = () => {

    const BG_IMG_STYLE = {
        backgroundImage: `url(${bgImg})`
    }
  return (
      <section className='startBusiness_section' style={BG_IMG_STYLE}>
          <div className='startBusiness_wrapper'>
              <h3 className="startBusiness_serviceList">graphic design</h3>
              <h3 className="startBusiness_serviceList">growth hacking</h3>
              <h3 className="startBusiness_serviceList">education</h3>
              <h3 className="startBusiness_serviceList">branding</h3>
              <h3 className="startBusiness_serviceList">web developing</h3>
              <h3 className="startBusiness_serviceList">online marketing</h3>
              <h3 className="startBusiness_serviceList">IT prevention</h3>
              <h3 className="startBusiness_serviceList">devOps</h3>
              <h3 className="startBusiness_serviceList">cloud service</h3>
              <h3 className="startBusiness_serviceList">app development</h3>
              <h3 className="startBusiness_serviceList">software development</h3>
              <h1 className='startBusiness_heading'>THE PERFECT PLACE TO START YOUR BUSINESS</h1>
              <p className='startBusiness_para'>A team of highly driven professionals with years of in-depth experience in the IT and business space. Our mission is to help oranizations leverage digital potential to its maximum efficiency.</p>
              <button className='startBusiness_button'>Explore Now</button>
          </div>
    </section>
  )
}

export default StartBusiness