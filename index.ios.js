/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, ListView,Button} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import MovieList from './App/Components/MovieList'
import USABox from './App/Components/USABox'


const MainNavigator = StackNavigator({
    MovieTallNav: { screen: MovieList},
    USABoxNav:{screen:USABox}

});

class HeaderText extends React.Component {
  render () {
    return (
        <Text style={styles.itemText}>
            {this.props.children}
        </Text>
    );
  }
}

AppRegistry.registerComponent('MovieTalk', () => MainNavigator);
