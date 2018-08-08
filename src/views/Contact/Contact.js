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
        <Input name="name" type="text" label="Name" required />
        <Input name="email" type="email" label="your@email.com" required />
        <Input name="subject" type="text" label="Subject" required />
        <Input name="message" type="textarea" label="Your message" required />
        <Button waves="light" type="submit">
          Submit
        </Button>
        {/* for bots and redirect after submit */}
        <input type="hidden" name="_next" value="https://globalcitydata.com" />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
      </form>
    </div>
  </section>
);

export default Contact;
