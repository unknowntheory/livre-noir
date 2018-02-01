import React, { Component } from 'react';
import { Nav } from 'components'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default MainContainer;