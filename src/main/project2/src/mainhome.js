import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Animated from "react-native-reanimated";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Reserchercard from './researcher';


class DrawerMain extends Component {

    render(){
        return (
            <ScrollView>
                <View style = {styles.mainView}>
                    <Text style = {{textAlign: 'center', fontSize:20, color: '#dea112'}}>연구원증</Text>
                    <TouchableOpacity
                        title = "내 정보"
                        onPress={()=>{
                            this.props.navigation.navigate('정보')
                        }}
                        style={{marginLeft:300}}
                    >
                        <Text>내 정보 변경</Text>
                    </TouchableOpacity>
                    <Reserchercard/>
                </View>
            </ScrollView>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        backgroundColor : '#f7f0d7',
        flex: 1,
        paddingTop: 10,
        width:'100%',
    },
    InformText: {
        fontSize: 12.5
    },
    InputView: {
        bottom : '52%',
    },
    Input : {
        borderWidth: 0.7,
        borderColor: "#dea112",
        width: 70, height : 26,
        marginLeft : "60%",
        top: 136,
        marginTop:4.5,
        marginBottom: 3,
        fontSize: 12.5,
        textAlign: 'center'
    },
    card : {
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor:'#dea112',
        shadowColor: '#000'
    },
})

export default DrawerMain;
