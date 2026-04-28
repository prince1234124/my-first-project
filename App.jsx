import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ImageTransform from './components/ImageTransform/ImageTransform';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TermsService from './pages/TermsService';
import SecurityPolicy from './pages/SecurityPolicy';
import MyPolicy from './pages/MyPolicy';
import ContactUs from './pages/ContactUs';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<ImageTransform />} />
            <Route path="/my-policy" element={<MyPolicy />} />
            <Route path="/terms" element={<TermsService />} />
            <Route path="/security" element={<SecurityPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;