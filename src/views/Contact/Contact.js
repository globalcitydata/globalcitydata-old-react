import React from 'react';
import { Row, Input, Button } from 'react-materialize';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Row>
        <Input s={6} m={12} placeholder="Placeholder" label="First Name" />
        <Input s={6} m={12} label="Last Name" />
        <Input s={6} m={12} type="password" label="password" />
        <Input s={6} m={12} type="email" label="Email" />
        <Button waves="light">Submit</Button>
      </Row>
    </div>
  );
}

export default Contact;
