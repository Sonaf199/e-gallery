import React from 'react';
import '../styles/Catagory.css'; // Adjusted path for Category.css

const Illustrations = () => {
  const illustrations = [
    { id: 1, title: 'Illustration 1', description: 'A whimsical digital illustration.', src: `${process.env.PUBLIC_URL}/Images/illustrations/ilt1.jpg` },
    { id: 2, title: 'Illustration 2', description: 'A detailed character design.', src: `${process.env.PUBLIC_URL}/Images/illustrations/ilt2.jpg` },
    { id: 3, title: 'Illustration 3', description: 'A fantasy scene with vibrant colors.', src: `${process.env.PUBLIC_URL}/Images/illustrations/ilt3.jpg` },
    { id: 4, title: 'Illustration 4', description: 'A creative concept art piece.', src: `${process.env.PUBLIC_URL}/Images/illustrations/ilt4.jpg` },
    { id: 5, title: 'Illustration 5', description: 'A stylized nature illustration.', src: `${process.env.PUBLIC_URL}/Images/illustrations/ilt5.jpg` },
  ];

  return (
    <div className="category-container">
      <h1>Illustrations</h1>
      <div className="art-grid">
        {illustrations.map(illustration => (
          <div key={illustration.id} className="art-card">
            <img src={illustration.src} alt={illustration.title} className="art-image" />
            <div className="art-overlay">
              <p>{illustration.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Illustrations;
