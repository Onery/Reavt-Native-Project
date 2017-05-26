/**
 * Created by onery on 2017/5/24.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../Styles/Main'
import {StackNavigator} from 'react-navigation'

import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

const REQUEST_URL = 'https://api.douban.com/v2/movie/us_box'


class USABox extends React.Component {
    /*static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.usaBox}`,
    });*/

    constructor(props) {
        super(props);
        /*let movies =[
         {
         title:'疯狂动物城',
         originalTitle:'迪士尼给我们营造的乌托邦就是这样，永远善良勇敢，永远出乎意料。',
         year:'2016',
         images:{
         large:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2315672647.jpg'
         },
         rating:{
         average:'9.2'
         }
         },
         {
         title:'釜山行',
         originalTitle:'明知山有釜，偏向釜山行。',
         year:'2016',
         images:{
         large:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2360940399.jpg'
         },
         rating:{
         average:'8.2'
         }
         },
         {
         title:'海蒂和爷爷 Heidi',
         originalTitle:'故事温情脉脉，风景怡情养目，一段醉人心脾的观影历程。',
         year:'2015',
         images:{
         large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2332944143.jpg'
         },
         rating:{
         average:'8.9'
         }
         },
         {
         title:'一个叫欧维的男人决定去死',
         originalTitle:'命运的残酷给了他最坚硬倔强的保护色，其实内心却又无尽的暖意和柔软。跌宕的一生谈何容易，情感令人泪目。我一直觉得平稳踏实以情动人，是好电影的标准之一。',
         year:'2016',
         images:{
         large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2406624993.jpg'
         },
         rating:{
         average:'8.7'
         }
         },
         {
         title:'小姐',
         originalTitle:'韩国女同商业片的第一座高峰，千回百转的阴谋阳谋',
         year:'2016',
         images:{
         large:'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2355555424.jpg'
         },
         rating:{
         average:'7.9'
         }
         },
         ];

         let moviesSource = new ListView.DataSource({
         rowHasChanged:(row1,row2) => row1 !==row2
         });*/

        this.state = {
            //初始数据
            movies:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !==row2
            }),


            loaded:false
        };

        this.fetchData();
    }

    /*componentDidMount() {
        this.fetchData();
    }*/

    fetchData(){
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    movies:this.state.movies.cloneWithRows(responseData.subjects),
                    loaded:true
                });
            })
            .done();
    }


    showMovieDetail (movie) {
        this.props.navigation.navigate('Detail',{movieInfo:movie})
    }

    renderMovieList (movie) {
        return (
            <TouchableOpacity
                underlayColor="rgba(34,26,38,0.2)"
                onPress={()=>{
                    /*this.props.navigation.navigate('ChatC',{toUserName:'Your Father',movieName:movie.title});*/
                    this.showMovieDetail(movie)
                }}
            >
                <View style={styles.item}>
                    <View style={styles.itemImg}>
                        <Image source={{uri:movie.subject.images.large}}
                               style={styles.img}
                        />
                    </View>

                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{movie.subject.title}</Text>
                        <Text style={styles.itemMeta}>{movie.subject.original_title}
                            <Text style={{color:'#6435c9'}}>({movie.subject.year})</Text>
                        </Text>
                        <Text style={styles.redText}> {movie.subject.rating.average} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    render () {

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


        return (

            <View style={styles.container}>
                <ListView dataSource={this.state.movies}
                          renderRow={this.renderMovieList.bind(this)}
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

export {USABox as default}