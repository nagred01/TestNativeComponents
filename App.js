import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationRouter from './src/FeatureModules/NavigationRouter';
import { createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(NavigationRouter);


export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
