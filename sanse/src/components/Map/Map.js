import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react/lib';
import PropTypes from 'prop-types';


const propTypes = {
  
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 10.8069881,
      lng: 106.6634607
    },
    zoom: 15
  }
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDda5R8s-D2s46HEL4Qa5srDksx0VQV08M' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={'sanse'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}


Map.propTypes = propTypes;


export default Map;
