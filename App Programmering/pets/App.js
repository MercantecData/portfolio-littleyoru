import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import Pets from './screens/Pets';
import Shelters from './screens/Shelters';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Pets: { screen: Pets },
  Shelters: { screen: Shelters }
}, {
  initialRouteName: 'HomeScreen'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
         <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
