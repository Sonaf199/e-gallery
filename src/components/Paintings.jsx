import React from 'react';
import '../styles/Catagory.css'; // Adjusted path for Category.css

const Paintings = () => {
  const paintings = [
    { id: 1, title: 'Painting 1', description: 'A classic oil painting on canvas.', src: `${process.env.PUBLIC_URL}/Images/paintings/p1.jpg` },
    { id: 2, title: 'Painting 2', description: 'Capturing monuments with paints and brushes.', src: `${process.env.PUBLIC_URL}/Images/paintings/p2.jpg` },
    { id: 3, title: 'Painting 3', description: 'A serene landscape in soft hues.', src: `${process.env.PUBLIC_URL}/Images/paintings/p3.jpg` },
    { id: 4, title: 'Painting 4', description: 'A portrait of simplicity.', src: `${process.env.PUBLIC_URL}/Images/paintings/p4.jpg` },
    { id: 5, title: 'Painting 5', description: 'A thoughtful interpretation of history.', src: `${process.env.PUBLIC_URL}/Images/paintings/p5.jpg` },
  ];

  return (
    <div className="category-container">
      <h1>Paintings</h1>
      <div className="art-grid">
        {paintings.map(painting => (
          <div key={painting.id} className="art-card">
            <img src={painting.src} alt={painting.title} className="art-image" />
            <div className="art-overlay">
              <p>{painting.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
