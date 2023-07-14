import React from 'react'
import "../styles/portfolio.css";
import { FiExternalLink } from "react-icons/fi";
// @ts-ignore
import bgImg from '../assets/start_bg.png'
// @ts-ignore
import img1 from '../assets/project1.jpeg'
// @ts-ignore
import img2 from '../assets/project2.png'
// @ts-ignore
import img3 from '../assets/project3.png'
// @ts-ignore
import img4 from '../assets/project4.png'

const Portfolio = () => {

  const BG_IMG_STYLE = {
    backgroundImage: `url(${bgImg})`
  }
  return (
    <section className='portfolio_section' >
      <div className='portfolio_backgroundImg' style={BG_IMG_STYLE}></div>
      <div className="portfolio_wrapper">
        <div>
          <div className="portfolio_introOutro">
            <h6>Portfolio</h6>
            <h2>Our Project Showcase</h2>
            <p>Every project we work on is valuable to us and the goal is to create the utmost value</p>
          </div>
          <article className='portfolio_project'>
            <img src={img1} alt='poject image' />
            <h3>Accounting and Billing Tool</h3>
            <div>
              <FiExternalLink />
              <span>Learn More</span>
            </div>
          </article>
          <article className='portfolio_project'>
            <img src={img2} alt='poject image' />
            <h3>E-COMMERCE</h3>
            <div>
              <FiExternalLink />
              <span>Learn More</span>
            </div>
          </article>
        </div>
        <div>
          <article className='portfolio_project'>
            <img src={img3} alt='poject image' />
            <h3>CRM</h3>
            <div>
              <FiExternalLink />
              <span>Learn More</span>
            </div>
          </article>
          <article className='portfolio_project'>
            <img src={img4} alt='poject image' />
            <h3>ERP</h3>
            <div>
              <FiExternalLink />
              <span>Learn More</span>
            </div>
          </article>
          <div className="portfolio_introOutro">
            <h3>View More Projects</h3>
            <button>More Project</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio