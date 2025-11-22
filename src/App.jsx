import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound";
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Gallery from './pages/Gallery'
import ServicesPage from './pages/ServicePage'
import SingleServicePage from './pages/SingleServicePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer'
import Certificate from './pages/Certificates'
import ScrollToTop from "./components/ScrollToTop"
import FloatingButtons from "./components/FloatingButtons"




const App = () => {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
         <Route path='/gallery' element={<Gallery/>}/>
       <Route path='/contact' element={<ContactPage/>}/>
      <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<SingleServicePage />} /> 
          <Route path="/certificates" element={<Certificate/>} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/Disclaimer" element={<Disclaimer/>} /> 

      <Route path="*" element={<NotFound />} />
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App