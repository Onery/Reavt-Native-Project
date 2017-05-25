/**
 * Created by onery on 2017/5/25.
 */

import React, { Component } from 'react';
import styles from '../Styles/Main'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    TouchableOpacity,
    Button
} from 'react-native';

class MovieDetail extends React.Component {

    static navigationOptions = ({navigation})=>({
        title:`${navigation.state.params.movieName}`,
    })


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.loading}>
                    <Text>MovieDetail</Text>
                </View>
            </View>
        );
    }
}

export {MovieDetail as default}