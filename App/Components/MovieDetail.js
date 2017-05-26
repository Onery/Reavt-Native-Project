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
            movieDetail:'',
            loaded:false
        };

        const REQUEST_URL=`https://api.douban.com/v2/movie/subject/${params.movieInfo.id}`
        this.fetchData(REQUEST_URL)
    }


    fetchData(movieURL) {
        fetch (movieURL)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                movieDetail:responseData,
                loaded:true
            });
        })
        .done();

    }

    render() {

        if(!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator
                            size="large"
                            color='#6435c9'
                        />
                    </View>
                </View>
            )
        }


        let movie = this.state.movieDetail;
        let summary = movie.summary.split(/\n/).map(p => {
            return(
                <View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
                    <Text style={styles.itemText}>{p}</Text>

                </View>
            );
        });


        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={[styles.item,{flexDirection:'column',margin:12}]}>
                    
                    {summary}
                </View>
            </View>
        );
    }
}

export {MovieDetail as default}