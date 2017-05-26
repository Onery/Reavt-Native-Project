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
            tabBarLabel:'热门电影',
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
            tabBarLabel:'欧美排行',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./App/Img/film-clap-board.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
                ),
            headerStyle:{
                backgroundColor:'darkslateblue'
            },
        }
    },
},
    {
        tabBarOptions: {
            activeTintColor:'white',
            activeBackgroundColor: 'darkslateblue',
            inactiveBackgroundColor:'darkslateblue',
            labelStyle: {
                fontSize: 10,
            },
        },
        style: {
            backgroundColor: 'rgba(255,255,255,0.8)',
        },
    }
);


const MainNavigator = StackNavigator({
    Home: { screen: MainScreenNavigator,
            },
    ChatC:{ screen:Chat},
    Detail:{screen:MovieDetail}

},
    {
        navigationOptions:{
            title:'首页',
            headerStyle:{
                backgroundColor:'darkslateblue'
            },
            titleStyle: {
                fontsize:300,
            },
            headerTintColor:'white'

        }
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
