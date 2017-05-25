/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, ListView,Button} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import styles from './App/Styles/Main'
import MovieList from './App/Components/MovieList'
import USABox from './App/Components/USABox'
import Chat from './App/Components/ChatScreen'
import MovieDetail from './App/Components/MovieDetail'

const MainScreenNavigator = TabNavigator({
    TopList: {
        screen: MovieList,
        navigationOptions:{
            title:'热门电影',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./App/Img/film.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
                ),
            }
        },

    BoxList: {
        screen: USABox ,
        navigationOptions:{
            title:'欧美排行',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./App/Img/film-clap-board.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
                ),
            activeBackgroundColor:'red',
            }
        },
});


const MainNavigator = StackNavigator({
    Home: { screen: MainScreenNavigator,
            navigationOptions:{
                title:'首页',
                activeTintColor:'red'
            }},
    ChatC:{ screen:Chat},
    Detail:{screen:MovieDetail}

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
