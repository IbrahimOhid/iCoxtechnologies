import React from 'react'
import Header from './Header'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import OurClient from '../components/OurClient/OurClient'
import OurQualityWork from '../components/OurQualityWork/OurQualityWork'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <OurClient/>
      <OurQualityWork/>
    </div>
  )
}

export default Home