import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that retrieves photoes from Unsplash API.
        Input any search term in the input field.
      </p>
      <Button variant="primary" href="https://unsplash.com/" target="_blank">Learn more</Button>
    </Jumbotron>
  )
};

export default Welcome;