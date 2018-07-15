import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
// import 
import MapComponent from './MapComponent';

const propTypes = {

};

class Map extends Component {
  state = {
    currentLocation: {
      lat: null,
      lng: null
    }
  }

  reateMapOptions = (maps) => {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: true
    };
  }

  static defaultProps = {
    center: {
      lat: 10.8069881,
      lng: 106.6634607
    },
    zoom: 15
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      console.log(coords.latitude, coords.longitude);
      this.setState({
        currentLocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      })
    })
  }

  render() {
    const map = this.state.currentLocation.lat !== null ? (
      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyDda5R8s-D2s46HEL4Qa5srDksx0VQV08M' }}
        defaultCenter={this.state.currentLocation}
        defaultZoom={this.props.zoom}
      >
        <MapComponent
          { ...this.state.currentLocation }
          text={'g'}
        />
      </GoogleMap>
    ) : null;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vw', width: '100%' }}>
        {map}
      </div>
    );
  }
}


Map.propTypes = propTypes;


export default Map;
