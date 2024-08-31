import React from "react";
import "./style.css";

// Import images
import JohnDoeProfile from "../Assets/akam.jpg";
import AbstractLandscape from "../Assets/3.jpg";
import modern from "../Assets/4.jpg";
import JaneSmithProfile from "../Assets/ca.jpg";
import SunsetBliss from "../Assets/5.jpg";
import FloralHarmony from "../Assets/6.jpg";
import AliceBrownProfile from "../Assets/po.jpg";
import GeometricDreams from "../Assets/7.jpg";
import Monochrome from "../Assets/8.jpg";
import RobertWilsonProfile from "../Assets/2.jpg";
import ColorExplosion from "../Assets/11.jpeg";
import DynamicFlow from "../Assets/9.jpg";

const ArtistPage = () => {
  const artists = [
    {
      name: "John Doe",
      bio: "John Doe is a contemporary artist known for his abstract paintings and unique style.",
      profilePicture: JohnDoeProfile,
      artworks: [
        {
          title: "Abstract Landscape",
          image: AbstractLandscape,
          description: "A beautiful abstract landscape painting.",
          price: "$200",
        },
        {
          title: "Modern Art",
          image: modern,
          description: "A stunning piece of modern art.",
          price: "$350",
        },
      ],
    },
    {
      name: "Jane Smith",
      bio: "Jane Smith specializes in watercolor paintings, capturing nature's essence with vivid colors.",
      profilePicture: JaneSmithProfile,
      artworks: [
        {
          title: "Sunset Bliss",
          image: SunsetBliss,
          description: "A calming sunset in watercolor.",
          price: "$180",
        },
        {
          title: "Floral Harmony",
          image: FloralHarmony,
          description: "A vibrant floral watercolor piece.",
          price: "$220",
        },
      ],
    },
    {
      name: "Alice Brown",
      bio: "Alice Brown creates minimalist digital art, focusing on geometric shapes and clean lines.",
      profilePicture: AliceBrownProfile,
      artworks: [
        {
          title: "Geometric Dreams",
          image: GeometricDreams,
          description: "A modern geometric digital art piece.",
          price: "$300",
        },
        {
          title: "Monochrome",
          image: Monochrome,
          description: "A minimalist black and white design.",
          price: "$250",
        },
      ],
    },
    {
      name: "Robert Wilson",
      bio: "Robert Wilson is an emerging artist with a passion for bold colors and dynamic compositions.",
      profilePicture: RobertWilsonProfile,
      artworks: [
        {
          title: "Color Explosion",
          image: ColorExplosion,
          description: "A vibrant and energetic painting.",
          price: "$400",
        },
        {
          title: "Dynamic Flow",
          image: DynamicFlow,
          description: "A powerful and fluid abstract piece.",
          price: "$380",
        },
      ],
    },
  ];

  return (
    <div className="artist-page">
      {artists.map((artist, index) => (
        <div key={index} className="artist-section">
          <div className="artist-info">
            <img
              src={artist.profilePicture}
              alt={`${artist.name}`}
              className="artist-profile"
            />
            <h1>{artist.name}</h1>
            <p>{artist.bio}</p>
          </div>
          <div className="artworks">
            {artist.artworks.map((artwork, index) => (
              <div key={index} className="artwork">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="artwork-image"
                />
                <h2>{artwork.title}</h2>
                <p>{artwork.description}</p>
                <p className="artwork-price">{artwork.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistPage;
