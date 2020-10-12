import React from 'react';
import logo from './logo-small.png';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <p>Letterpals is a web app designed to help users keep track of their postal correspondance.</p>
      <img src={logo} width="200" />

    </div>
  </div>
);

export default AboutPage;
