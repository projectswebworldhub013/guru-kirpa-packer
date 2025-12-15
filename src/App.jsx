import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import ServicesPage from './pages/ServicePage';
import SingleServicePage from './pages/SingleServicePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import Certificate from './pages/Certificates';
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";
import ServiceArea from './pages/ServiceArea';
import GurukirpaQuotePopup from './components/QuotePopup';

const App = () => {
  // ✅ Hooks must be inside component
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenPopup(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Popup */}
      <GurukirpaQuotePopup 
        isOpen={openPopup} 
        onClose={() => setOpenPopup(false)} 
      />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home openPopup={() => setOpenPopup(true)} />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/services/:slug' element={<SingleServicePage />} />
        <Route path='/service-area' element={<ServiceArea />} />
        <Route path='/certificates' element={<Certificate />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <FloatingButtons />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
