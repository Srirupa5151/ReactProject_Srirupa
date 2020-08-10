import React, { Component } from 'react';
import Navbar from './Navbar';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  }
}

export default App; 