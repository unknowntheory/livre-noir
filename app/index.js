import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Hello extends Component {
  render() {
    return (
      <div>
        <h1> HELLO WORLD </h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app') )

export default Hello;