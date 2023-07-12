import React from 'react';
import { GiCursedStar } from "react-icons/gi";
import { PiChatsLight } from "react-icons/pi";
import { RiServiceLine } from "react-icons/ri";
// @ts-ignore
import img from '../assets/chooseUs.png';
import "../styles/chooseUs.css";

const ChooseUs = () => {
  return (
      <section className='chooseUs_section'>
          <div className="chooseUs_wrapper">
              <article className='chooseUs_article'>
                  <h6>Why Choose Us</h6>
                  <h2>Committed for Better Business.</h2>
                  <p>We create value for our clients by providing strategic, impactful and creative work to help them.</p>
                  <ul>
                    <li className='chooseUs_article--card'>
                        <div><GiCursedStar size={41}/></div>
                        <aside>
                            <h5>Experienced Team</h5>
                            <p>We identify challenges and deliver effective solutions with the help of our passionate and committed team of experts.</p>
                        </aside>
                    </li>
                    <li className='chooseUs_article--card'>
                        <div><RiServiceLine size={41}/></div>
                        <aside>
                            <h5>Reliable Service</h5>
                            <p>A group of individuals constantly working hard to set us apart from the rest, you can trust us to know what works best for you and deliver something even better than that.</p>
                        </aside>
                    </li>
                    <li className='chooseUs_article--card'>
                        <div><PiChatsLight size={41}/></div>
                        <aside>
                            <h5>24/7 Support</h5>
                            <p>Whenever you have a question, we will be right there happy to assist you at any moment to ensure nothing hinders your productivity.</p>
                        </aside>
                    </li>
                  </ul>
              </article>
              <figure className='chooseUs_figure'>
                  <img src={img} alt="why choose us" />
              </figure>
          </div>
    </section>
  )
}

export default ChooseUs     