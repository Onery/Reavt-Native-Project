/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, ListView,Button} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import styles       from './App/Styles/Main'
import MovieList    from './App/Components/MovieList'
import USABox       from './App/Components/USABox'
import Chat         from './App/Components/ChatScreen'
import MovieDetail  from './App/Components/MovieDetail'
import Search       from './App/Components/Search'
import SearchResult       from './App/Components/SearchResult'

const MainScreenNavigator = TabNavigator({
    TopList: {
        screen: MovieList,
        navigationOptions:{
            title:'推荐电影',
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
            title:'欧美票房',
            tabBarLabel:'欧美票房',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./App/Img/film-clap-board.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
                ),
            }
        },

    Search: {
        screen: Search ,
        navigationOptions:{
            title:'搜索',
            tabBarLabel:'搜索',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./App/Img/search.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
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
    Detail:{screen:MovieDetail},
    SearchResult:{screen:SearchResult}

},
    {
        navigationOptions:{
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
