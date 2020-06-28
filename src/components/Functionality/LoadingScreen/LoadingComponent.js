import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import AppRoutes from '../../../AppRoutes';

export default class LoadingPage extends React.Component{
    constructor(props){
        super(props);
        setTimeout(() => {
            debugger
            AsyncStorage.getItem('token').then((response) => {
                this.props.navigation.navigate(response != null ? AppRoutes.CARCOLLECTION : AppRoutes.SPLASH)
            })
        },100);
    }
    render(){
        return(
            <View style={{flex:1,justifyContent: "center", alignContent:"center"}}>
                <ActivityIndicator size="large" color="#009ABA" />
            </View>
        )
    }
}