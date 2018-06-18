import React, { Component } from 'react';
import '../assets/css//App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
// import Publications from './Publications';
// import Collaborators from './Collaborators';
// import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <Publications />
        <Collaborators />
        <Contact /> */}
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
