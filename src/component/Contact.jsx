import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setLoading(true);

    try {
      await fetch('https://formsubmit.co/ajax/kumarpanne123@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData,
      });

      alert('Thanks for connecting with me!');
      window.scrollTo({ top: 0, behavior: 'smooth' });

  
      e.target.reset();

    } catch (error) {
      alert('Oops! Something went wrong.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>

        <input type="hidden" name="_subject" value="New Contact Form Message" />
        <input type="hidden" name="_captcha" value="false" />

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
