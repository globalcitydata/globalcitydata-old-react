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
        <Input label="Name" required />
        <Input type="email" label="your@email.com" required />
        <Input label="Subject" required />
        <Input type="textarea" label="Your message" required />
        <Button waves="light" type="submit">
          Submit
        </Button>
      </form>
    </div>
  </section>
);

export default Contact;
