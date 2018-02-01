import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = {
    activeItem: 'Past Books'
  }

  // handleClick(e, { name }) {
  //   console.log('gg')
  //   this.setState({active: name})
  // }
  handleClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick} />
          <Menu.Item name='Past Books' active={activeItem === 'Past Books'} onClick={this.handleClick} />
          <Menu.Item name='Upload' active={activeItem === 'Uploads'} onClick={this.handleClick} />
          <Menu.Item name='Today entries' active={activeItem === 'Today entries'} onClick={this.handleClick} />
          <Menu.Item name='F.A.Q' active={activeItem === 'F.A.Q'} onClick={this.handleClick} />
      </Menu>
    )
  }
}
export default Nav;