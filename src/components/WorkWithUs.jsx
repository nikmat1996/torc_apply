import React from 'react'
import "../styles/workWithUs.css";
// @ts-ignore
import img from '../assets/workWithUs.png'

const WorkWithUs = () => {
  return (
      <section className='work--section'>
          <div className="work--wrapper">
              <div><img src={img} alt="image" /></div>
              <aside>
                  <h2>Work with Us</h2>
                  <p>Now, let’s talk about you.</p>
                  <button>Contact Us</button>
              </aside>
          </div>
    </section>
  )
}

export default WorkWithUs