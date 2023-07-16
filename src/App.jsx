import React from 'react'
import Navbar from './components/Navbar'
import StartBusiness from './components/StartBusiness'
import Numbers from './components/Numbers'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Testimonials from './components/Testimonials'
import WorkWithUs from './components/WorkWithUs'

const App = () => {  

  return (
    <div >
      <Navbar  />
      <StartBusiness  />
      <Numbers />
      <AboutUs />
      <Services />
      <ChooseUs />
      <Portfolio />
      <ContactUs />
      <Testimonials />
      <WorkWithUs />
    </div>
  )
}

export default App