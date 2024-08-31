import React from 'react';
import '../styles/CU.css'; // Ensure the path is correct

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form
        action="mailto:your-email@example.com"
        method="post"
        encType="text/plain"
        className="contact-form"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>If you have any questions or need assistance, feel free to reach out to us.</p>
        <p>Email: <a href="mailto:your-email@example.com" className="contact-email">sonafrehman007@gmail.com</a></p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Art Street, Art City, AR 12345</p>
        <a href="mailto:your-email@example.com" className="contact-button">Email Us</a>
      </div>
    </div>
  );
};

export default ContactUs;
