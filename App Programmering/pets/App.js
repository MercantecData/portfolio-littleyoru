import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import PetsInfo from './screens/PetsInfo';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  PetsInfo: { screen: PetsInfo }
}, {
  initialRouteName: 'HomeScreen'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
