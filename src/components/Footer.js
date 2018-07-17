import React from 'react';
import logo from '../img/nsf_logo.png';

export default function Footer() {
  return (
    <footer className="blue">
      <div className="container content-wrap">
        <img src={logo} alt="nsf logo" />
      </div>
    </footer>
  );
}
