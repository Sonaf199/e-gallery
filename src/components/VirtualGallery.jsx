import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/virtualgallery.css';

const VirtualGallery = () => {
    return (
        <div className="virtual-gallery-container">
            <div className="title-container">
                <h1 className="gallery-title">ArtVoyage</h1>
                <h3 className="gallery-subtitle">Take a Journey Through Art</h3>
            </div>
            <div className="card-container">
                <Link to="/paintings" className="card">
                    <img src={`${process.env.PUBLIC_URL}/Images/paint.jpg`} alt="Paintings" />
                    <h2>Paintings</h2>
                </Link>
                <Link to="/illustrations" className="card">
                    <img src={`${process.env.PUBLIC_URL}/Images/illustration.jpg`} alt="Illustrations" />
                    <h2>Illustrations</h2>
                </Link>
                <Link to="/photographs" className="card">
                    <img src={`${process.env.PUBLIC_URL}/Images/photo.jpg`} alt="Photographs" />
                    <h2>Photographs</h2>
                </Link>
            </div>
        </div>
    );
};

export default VirtualGallery;
