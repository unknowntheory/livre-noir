import React, { Component } from 'react';
import { Container, diveder, Image } from 'semantic-ui-react'
import { Home } from 'components'

class HomeContainer extends Component {


  render() {
    return (
      <div>
        {/* <Container textAlign='center'>
          <h1>livre-noir</h1>
          
        </Container> */}
        <Home />
      </div>
    );
  }
}

export default HomeContainer;