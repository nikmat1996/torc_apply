import React from 'react'
import "../styles/testimonials.css";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
      <section className='testimonials--section'>
          <div className="testimonials--wrapper">
              <aside className='testimonials--aside'>
                  <h6>Testimonials</h6>
                  <h2>Clients Speak</h2>
                  <p>Don’t believe us? Take a look at what our clients have to say.</p>
              </aside>
              <div className='testimonials_card-container'>
                  <article className="testimonials_card">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <p>We have been working with the team of Torc Infotech for the past 3 months. They do great work and show results. Setting our business online seemed to be very intimidating but they understood the needs of our business and helped us set up efficiently. They bring vibrant ideas to the table and always delivery on time.</p>
                      <div className="testimonials_card--nameWrap">
                          <strong>~Suresh Menon</strong>
                          <FaQuoteRight size={48} fill='rgba(37, 117, 252, 0.2)'/>
                      </div>
                  </article>
                  <article className="testimonials_card">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <p>We are delighted with Torc Infotech’ performance in our latest project. They bring an expertise and problem solving approach through their efficient team. They follow and keep up work and deliver promptly. Their flexibility and innovation is appreciative.</p>
                      <div className="testimonials_card--nameWrap">
                          <strong>~Michelle Joseph</strong>
                          <FaQuoteRight size={48} fill='rgba(37, 117, 252, 0.2)'/>
                      </div>
                  </article>
              </div>
          </div>
    </section>
  )
}

export default Testimonials