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
        title:`${navigation.state.params.movieInfo.title}`,
    })

    constructor (props) {
        super (props);
        const { params } = this.props.navigation.state;
        console.log(params.movieInfo.id);
        this.state={
            movieDetail:''
        };

        const REQUEST_URL=`https://api.douban.com/v2/movie/subject/${params.movieInfo.id}`
    }


    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.loading}>
                    <Text>MovieDetail {params.movieInfo.id}</Text>
                </View>
            </View>
        );
    }
}

export {MovieDetail as default}