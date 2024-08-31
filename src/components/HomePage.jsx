import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HP.css'; // Adjusted path for HomePage.css

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title transform hover:scale-105 transition-transform duration-500">
            Welcome to e-Gallery
          </h1>
          <p className="hero-description">
            Discover and purchase beautiful art from talented artists worldwide.
          </p>
          <div className="hero-buttons">
            <Link to="/gallery" className="hero-button transform hover:translate-y-1 transition-transform duration-300">
              Explore the Gallery
            </Link>
            <Link to="/about" className="hero-button transform hover:translate-y-1 transition-transform duration-300">
              About Us
            </Link>
            <Link to="/contact" className="hero-button transform hover:translate-y-1 transition-transform duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card transform hover:scale-105 transition-transform duration-500">
            <h2>Curated Collections</h2>
            <p>Explore art collections handpicked by our experts.</p>
          </div>
          <div className="feature-card transform hover:scale-105 transition-transform duration-500">
            <h2>Virtual Gallery</h2>
            <p>Experience the art through our immersive virtual gallery.</p>
          </div>
          <div className="feature-card transform hover:scale-105 transition-transform duration-500">
            <h2>Secure Purchases</h2>
            <p>Buy art with confidence through our secure platform.</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-preview-section">
        <h2 className="preview-title">Featured Artworks</h2>
        <div className="preview-grid">
          <div className="preview-card transform hover:rotate-3 transition-transform duration-500">
            <img src={`${process.env.PUBLIC_URL}/Images/paintings/p1.jpg`} alt="Featured Painting 1" />
            <p className="preview-overlay">Painting 1</p>
          </div>
          <div className="preview-card transform hover:rotate-3 transition-transform duration-500">
            <img src={`${process.env.PUBLIC_URL}/Images/illustrations/ilt2.jpg`} alt="Featured Illustration 2" />
            <p className="preview-overlay">Illustration 2</p>
          </div>
          <div className="preview-card transform hover:rotate-3 transition-transform duration-500">
            <img src={`${process.env.PUBLIC_URL}/Images/photographs/ph3.jpg`} alt="Featured Photograph 3" />
            <p className="preview-overlay">Photograph 3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
