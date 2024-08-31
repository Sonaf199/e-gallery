import React from 'react';
import '../styles/Catagory.css';

const Photographs = () => {
  const photographs = [
    { id: 1, title: 'Photograph 1', description: 'A stunning landscape photo.', src: `${process.env.PUBLIC_URL}/Images/photographs/ph1.jpg` },
    { id: 2, title: 'Photograph 2', description: 'A beautiful portrait shot.', src: `${process.env.PUBLIC_URL}/Images/photographs/ph2.jpg` },
    { id: 3, title: 'Photograph 3', description: 'A serene nature capture.', src: `${process.env.PUBLIC_URL}/Images/photographs/ph3.jpg` },
    { id: 4, title: 'Photograph 4', description: 'A breathtaking waterscape.', src: `${process.env.PUBLIC_URL}/Images/photographs/ph4.jpg` },
    { id: 5, title: 'Photograph 5', description: 'A dynamic action shot.', src: `${process.env.PUBLIC_URL}/Images/photographs/ph5.jpg` },
  ];

  return (
    <div className="category-container">
      <h1>Photographs</h1>
      <div className="art-grid">
        {photographs.map(photo => (
          <div key={photo.id} className="art-card">
            <img src={photo.src} alt={photo.title} className="art-image" />
            <div className="art-overlay">
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photographs;
