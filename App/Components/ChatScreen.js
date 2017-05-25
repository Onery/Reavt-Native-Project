/**
 * Created by onery on 2017/5/25.
 */

import React, { Component } from 'react';
import styles from '../Styles/Main'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import {
    Text,
    View,
} from 'react-native';

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.movieName}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.overlay}>
                <Text style={styles.title}>Chat with {params.toUserName}</Text>
            </View>
        );
    }
}
export {ChatScreen as default}