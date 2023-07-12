import React from 'react';
import '../styles/numbers.css';
import { HiOutlineUsers } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'
import { PiShootingStarBold } from 'react-icons/pi'

const Numbers = () => {


  return (
      <section className='numbers_section'>
          <div className="numbers_wrapper">
              <h2 className='numbers_heading'>At Torc Infotech, our relentless aim is to innovate technology solutions that enhance</h2>
              <p className='numbers_para'>Customer experiences and bring the world close to the mainstream adoption of digitalization and automation technology practices.</p>
              <div className='numbers_card'>
                  <HiOutlineUsers size={55} />
                  <div>
                      <h3>50<span>+</span></h3>
                      <p>Happy Clients</p>
                  </div>
              </div>
              <div className='numbers_card'>
                  <FaUsers size={55} />
                  <div>
                      <h3>20<span>+</span></h3>
                      <p>Teammates</p>
                  </div>
              </div>
              <div className='numbers_card'>
                  <SlGlobe size={55} />
                  <div>
                      <h3>8</h3>
                      <p>Countries</p>
                  </div>
              </div>
              <div className='numbers_card'>
                  <PiShootingStarBold size={55} />
                  <div>
                      <h3>100<span>%</span></h3>
                      <p>Satisfaction</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Numbers