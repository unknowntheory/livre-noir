import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TodayEntries } from 'components'

class EntriesContainer extends Component {
  render() {
    return (
      <div>
        <TodayEntries />
        <h1>test</h1>
      </div>
    );
  }
}

EntriesContainer.propTypes = {

};

export default EntriesContainer;