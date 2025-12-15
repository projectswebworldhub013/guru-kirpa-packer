import React from 'react'

import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Service from '../components/ServiceSection'
import DynamicStatsCounter from '../components/DynamicStatsCounter'
import MarqueeStrip from '../components/MarqueeStrip'
import Hero from '../components/Hero'
import GurukirpaSection from '../components/GuruSection'
import FAQGurukirpa from '../components/FAQ'
import GurukirpaRelocation from '../components/GuruKirpaRelocation'


const Home = () => {
  return (
  <>
  <Hero/>
  <About/>
  <MarqueeStrip/>
  <WhyChooseUs/>
  <Service/>
<GurukirpaSection/>
 <DynamicStatsCounter/>
<GurukirpaRelocation/>
<FAQGurukirpa/>

  </>
  )
}

export default Home