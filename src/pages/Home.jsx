import React from 'react'

import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Service from '../components/ServiceSection'
import DynamicStatsCounter from '../components/DynamicStatsCounter'
import ThoughtAndContact from '../components/ThoughtAndConnect'
import MarqueeStrip from '../components/MarqueeStrip'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import GurukirpaSection from '../components/GuruSection'


const Home = () => {
  return (
  <>
  <Hero/>
  <About/>
  <MarqueeStrip/>
  <WhyChooseUs/>
  <Service/>
 <DynamicStatsCounter/>
<FAQ/>
<GurukirpaSection/>

  </>
  )
}

export default Home