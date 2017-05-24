/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import MovieList from './App/Components/MovieList'


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
    ListView,
} from 'react-native';




class MovieTalk extends React.Component {
    constructor(props) {
        super(props);
    }

  render () {
    return (
    <MovieList />

    );
  }

}


class HeaderText extends React.Component {
  render () {
    return (
        <Text style={styles.itemText}>
            {this.props.children}
        </Text>
    );
  }
}

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
