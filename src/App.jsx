import React from 'react'
import Navbar from './components/Navbar'
import StartBusiness from './components/StartBusiness'
import Numbers from './components/Numbers'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <StartBusiness />
      <Numbers />
      <AboutUs />
      <Services />
      <ChooseUs />
    </div>
  )
}

export default App