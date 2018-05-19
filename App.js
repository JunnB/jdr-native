import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './app/store/store'; //Import the store
import Home from './app/components/home' //Import the component file
import WhitePage from './app/components/index' //Import the component file
import ScarletScreen from './app/components/scarlett_screen';
import GreenScreen from './app/components/green_screen';

export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
      <Scene key="scarlet"
      component={ScarletScreen}
      title="Scarlet"
      initial
      />
      <Scene
      key="green"
      component={GreenScreen}
      title="Green"
      />
      </Scene>
      </Router>
    );
  }
}
