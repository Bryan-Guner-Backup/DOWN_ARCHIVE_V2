import React, { createContext, Component } from 'react';

export const DataContext = createContext();

class DataContextProvider extends Component {
  state = {
    id_num: 0,
  };
  updateData = (location, center) => {
    this.setState({ location: location, center: center });
  };
  render() {
    return (
      <DataContext.Provider
        value={{ ...this.state, updateData: this.updateData }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
