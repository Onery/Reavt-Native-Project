/**
 * Created by onery on 2017/5/26.
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

class Search extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    search
                </Text>
            </View>
        );
    }
}

export {Search as default}