import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import VirtualGallery from './components/VirtualGallery';
import Paintings from './components/Paintings';
import Illustrations from './components/Illustrations';
import Photographs from './components/Photographs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<VirtualGallery />} />  {/* Ensure this route exists */}
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/photographs" element={<Photographs />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
