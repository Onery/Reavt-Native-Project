/**
 * Created by onery on 2017/5/25.
 */

import React, { Component } from 'react';
import styles from '../Styles/Main'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import {
    Text,
    View,
    Button
} from 'react-native';

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Info with ${navigation.state.params.movieName}`,
        headerRight:<Button title='INFO'/>,
    });
    /*static navigationOptions = ({ navigation }) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
                />
            ),
        };
    };*/
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