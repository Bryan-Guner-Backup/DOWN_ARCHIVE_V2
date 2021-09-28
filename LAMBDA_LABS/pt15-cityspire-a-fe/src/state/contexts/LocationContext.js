import React, { createContext, Component } from 'react';

export const LocationContext = createContext();

class LocationContextProvider extends Component {
  state = {
    location: 'Seattle',
    center: [-122.3301, 47.6038],
  };
  updateLocation = (location, center) => {
    this.setState({ location: location, center: center });
  };
  render() {
    return (
      <LocationContext.Provider
        value={{ ...this.state, updateLocation: this.updateLocation }}
      >
        {this.props.children}
      </LocationContext.Provider>
    );
  }
}

export default LocationContextProvider;
