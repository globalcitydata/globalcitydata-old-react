import React from 'react';
import { Input, Button } from 'react-materialize';

const Contact = () => (
  <section className="contact">
    <div className="container">
      <h1>Contact</h1>
      <form
        action="https://formspree.io/globalcitydata@gmail.com"
        method="POST"
      >
        <div className="input-field" />
        <div className="input-field">
          <input id="name" name="name" type="text" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input id="email" name="email" type="email" required />
          <label htmlFor="email">your@email.com</label>
        </div>
        <div className="input-field">
          <input id="subject" name="subject" type="text" required />
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="input-field">
          <textarea
            id="message"
            name="message"
            className="materialize-textarea"
            required
          />
          <label htmlFor="message">Your message</label>
        </div>
        <button className="btn" waves="light" type="submit">
          Submit
        </button>
        {/* for bots and redirect after submit */}
        <input type="hidden" name="_next" value="https://globalcitydata.com" />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
      </form>
    </div>
  </section>
);

export default Contact;
