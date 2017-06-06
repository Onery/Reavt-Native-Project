/**
 * Created by onery on 2017/6/6.
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

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250'


class SearchResult extends React.Component {
    static navigationOptions = ({ navigation }) => ({
     title: `${navigation.state.params.searchTitle}`
     });
    constructor(props) {
        super(props);

        let searchResultsData = new ListView.DataSource({
            rowHasChanged:(row1,row2) => row1 !== row2
        });

        this.state = {
            //初始数据
            loaded:false,
            searchMovies:searchResultsData.cloneWithRows(this.props.navigation.state.params.results)
        };


    }

    showMovieDetail (movie) {
        this.props.navigation.navigate('Detail',{movieInfo:movie})
    }




    renderSearchMovieList (movie) {
        return (
            <TouchableOpacity
                underlayColor="rgba(34,26,38,0.2)"

                onPress={()=>{
                    /*this.props.navigation.navigate('ChatC', { usaBox:  '北美票房' ,toUserName:'Your Dad',movieName:movie.title});*/
                    this.showMovieDetail(movie)
                }}
            >
                <View style={styles.item}>
                    <View style={styles.itemImg}>
                        <Image source={{uri:movie.images.large}}
                               style={styles.img}
                        />
                    </View>

                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{movie.title}</Text>
                        <Text style={styles.itemMeta}>{movie.original_title}
                            <Text style={{color:'#6435c9'}}>({movie.year})</Text>
                        </Text>
                        <Text style={styles.redText}> {movie.rating.average} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    render () {
        return (

            <View style={styles.container}>
                <ListView dataSource={this.state.searchMovies}
                          renderRow={this.renderSearchMovieList.bind(this)}
                          removeClippedSubviews={false}
                />

            </View>

        );
    }

}


class HeaderText extends React.Component {
    render () {
        return (
            <Text style={styles.itemText}>
                {this.props.children}
            </Text>
        );
    }
}

export {SearchResult as default}