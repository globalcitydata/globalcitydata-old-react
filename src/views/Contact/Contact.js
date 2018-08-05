import React from 'react';
import { Row, Input, Button } from 'react-materialize';

const handleSubmit = e => {
  e.preventDefault();
};

const Contact = () => (
  <section className="contact">
    <div className="container">
      <h1>Contact</h1>
      <Row>
        <Input s={12} label="First Name" validate />
        <Input s={12} label="Last Name" validate />
        <Input s={12} type="password" label="Password" validate />
        <Input s={12} type="email" label="Email" validate />
        <Button waves="light" onClick={handleSubmit}>
          Submit
        </Button>
      </Row>
    </div>
  </section>
);

export default Contact;
