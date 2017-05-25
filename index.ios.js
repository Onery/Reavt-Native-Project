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
import Chat from './App/Components/ChatScreen'

const MainScreenNavigator = TabNavigator({
    TopList: { screen: MovieList,
               navigationOptions:{
                   title:'热门电影'
               }
            },
    BoxList: { screen: USABox ,
        navigationOptions:{
            title:'欧美排行'
        }
        },
});


const MainNavigator = StackNavigator({
    Home: { screen: MainScreenNavigator,
            navigationOptions:{
                title:'首页'
            }},
    ChatC:{ screen:Chat}

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
