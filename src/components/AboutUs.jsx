import React from 'react';
import '../styles/AU.css'; // Ensure the path is correct

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="team-members">
        <div className="member-card">
          <h2>Sonaf-ur-Rehman</h2>
          <h3>Founder & CEO</h3>
          <p>
            Sonaf is the visionary behind our platform. With over 5 years of experience in the art world, she has a deep passion for connecting artists with their audiences. Sonaf's leadership has been crucial in shaping our company's mission and values.
          </p>
        </div>
        <div className="member-card">
          <h2>Heena Khan</h2>
          <h3>Chief Designer</h3>
          <p>
            Heena is our creative mastermind, responsible for the design and user experience of our platform. With a background in graphic design and user interface design, she ensures that our website is not only beautiful but also easy to navigate.
          </p>
        </div>
        <div className="member-card">
          <h2>Muhammad Usman</h2>
          <h3>Marketing Lead</h3>
          <p>
            Usman is our marketing expert, overseeing all promotional activities and brand strategies. His innovative approaches and deep understanding of market trends help us reach a wider audience and attract new users.
          </p>
        </div>
        <div className="member-card">
          <h2>Muhammad Abdullah</h2>
          <h3>Technical Support</h3>
          <p>
            Abdullah ensures that our platform runs smoothly. With a strong background in IT and customer support, he is dedicated to resolving technical issues and providing exceptional support to our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
