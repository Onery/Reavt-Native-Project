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
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Onery</Text>
            </View>
        );
    }
}
export {ChatScreen as default}