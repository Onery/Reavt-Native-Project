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
    Button,
    TextInput
} from 'react-native';

class Search extends React.Component{

    static navigationOptions = ({navigation})=>({
        title:'搜索',

    })

    constructor (props) {
        super(props);
        this.state={
            text:'',
            query:''
        };

    }

    searchMovie(){
        const REQUEST_URL = `http://api.douban.com/v2/movie/search?q=${this.state.query}`
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData)
            })
            .done();
    }




    render(){
        return(
            <View>
                <View style={{
                    paddingTop:7,
                    paddingRight:7,
                    paddingLeft:7,
                    borderColor:'rgba(100,53,201,0.1)',
                    borderBottomWidth:1
                }}>
                <TextInput
                    style={{height:36}}
                    placeholder="这特么是一个搜索框"
                    clearButtonMode={"while-editing"}
                    /*placeholderTextColor={"#6435c9"}
                    autoCorrect={false}
                    editable={true}
                    keyboardType={"email-address"}
                    secureTextEntry={true}
                    clearTextOnFocus={false}
                    enablesReturnKeyAutomatically={true}
                    autoFocus={true}*/
                    returnKeyType={"next"}

                    onChangeText={(editText)=> {
                        this.setState({query:editText})
                        }
                    }
                    onFocus={()=>console.log('onfocus')}
                    onBlur={()=>console.log('onblur')}
                    onChange={()=>console.log('onchange')}
                    onEndEditing={()=>console.log('onendEditing')}
                    onSubmitEditing={
                        this.searchMovie.bind(this)
                    }
                    />
                </View>
            </View>
        );
    }

    componentDidMount(){
    }
}

export {Search as default}