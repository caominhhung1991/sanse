import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapStyle } from './MapStyle';

const propTypes = {
  text: PropTypes.string.isRequired,
};

 class MapComponent extends Component {
  render() {
    return (
      <div style={mapStyle}>
        {this.props.text}
      </div>
    )
  }
}

MapComponent.propTypes = propTypes;

export default MapComponent;
