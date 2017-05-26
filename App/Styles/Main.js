/**
 * Created by onery on 2017/5/24.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

let styles=StyleSheet.create({

    icon: {
        width: 26,
        height: 26,
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    itemImg:{

    },

    itemContent:{
        backgroundColor:'#eae7ff',
        flex:1,
        paddingTop:0,
    },

    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'#6435c9',
        marginBottom:6,
        marginTop:6,
    },

    itemMeta:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6,
        marginRight:10
    },

    redText:{
        color:'#db2828',
        fontSize:15,
    },

    item: {
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'rgba(100,53,201,0.1)',
        paddingBottom:6,
        /*marginBottom:6,*/
        paddingTop:6,
        flex:1,
    },

    overlay:{
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        alignSelf:'center'
    },

    overlayHeader:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'400',
        color:'#eae7ff',
        padding:10,
    },

    overlaySubHeader:{
        fontSize:8,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#eae7ff',
        padding:0,
        paddingTop:10,
        marginBottom:15
    },

    backgroundImg:{
        flex:1,
        resizeMode:'cover',
        alignItems:'center'
    },

    img:{
        width:99,
        height:138,
        margin:6,
        backgroundColor:'yellow',
        alignSelf:'center',
    },

    itemFuck:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#6435c9',
        margin:6,
        flex:1
    },

    itemOne:{
    },

    itemTwo:{
        alignSelf:'flex-end'
    },

    itemThree:{
    },

    itemText:{
        fontSize:16,
        fontFamily:'Helvetica Neue',
        fontWeight:'300',
        color:'rgba(0,0,0,0.8)',
        lineHeight:20,
        /*padding:24,
        paddingTop:0,
        textAlign:'center',
        backgroundColor:'white',*/
    },

    container:{
        flexDirection:'row',
        backgroundColor:'#eae7ff',
        flex:1,
        paddingTop:0,
        // alignItems:'flex-end'
        // justifyContent:'space-around'
        // margin:30,
        // borderWidth:1,
        // borderColor:'#6435c9',
        // borderRadius:16,
        // shadowColor:'yellow',
        // shadowOpacity:0.6,
        // shadowOffset:{height:1,
        //               width:0},
        //
        // shadowRadius:2
    },

    title:{

        textAlign:'center',
        fontSize:26,
        color:'red',
        fontStyle:'italic',
        letterSpacing:2,
        lineHeight:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        textDecorationLine:'underline',
        textDecorationStyle:'double',
        textDecorationColor:'green'
    }
});
export {styles as default}