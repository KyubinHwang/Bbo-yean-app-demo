import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';


class FindingId extends Component {

    state = {
        ID: '',
        EMAIL: '',
    }
    onChangeID = (event) => {
        this.setState ({
            ID: event
        })
    }
    onChangeEMAIL = (event) => {
        this.setState ({
            EMAIL: event
        })
    }

    render(){
        return (
            <View style = {styles.mainView}>
                <View style= {{flexDirection: 'row',}}>
                    <Text style = {{color: '#dea112'}}>아이디 찾기</Text>
                    <Text
                    onPress = {()=>{
                         this.props.navigation.navigate('비밀번호 찾기')
                     }}>   비밀번호 찾기</Text>
                </View>
                <TextInput value = {this.state.EMAIL}
                style = {styles.input}
                onChangeText={this.onChangeEMAIL}
                placeholder = "가입시 입력한 이메일"
                multiline={true}
                maxLength = {30}
                autoCapitalize={'none'}
                >
                </TextInput>
                <TouchableOpacity
                    style = {styles.find}
                    onPress = {()=>{
                        axios.post('http://192.168.35.7:8080/members/findname',{
                             email: this.state.EMAIL,
                         }).then(response => {
                             console.log(response.data.name);
                             Alert.alert('-일치하는 아이디-',response.data.name);
                         }).catch(error => {
                             console.log(error);
                         })
                    }}
                >
                    <Text>아이디 찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.back}
                    onPress = {()=>{
                        this.props.navigation.navigate('Login')
                    }}
                >
                    <Text>뒤로가기</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    mainView: {
    backgroundColor : '#f7f0d7',
            flex: 1,
        paddingTop: 30,
        width:'100%',
        alignItems:'center',
    },
    input: {
        width: '75%',
        backgroundColor: '#f7f4e9',
        borderColor:'#dea112',
        borderWidth: 1,
        marginTop: 30,
        fontSize: 15,
        padding: 10,
    },
    submitButton:{
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        marginTop: 30,
        borderWidth: 0.5,
        padding: 8,
        alignItems: 'center'
    },
    find:{
        marginTop: 15,
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        borderWidth: 0.5,
        padding: 8,
        alignItems: 'center'
    },
    back:{
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        borderWidth: 0.5,
        padding: 8,
        alignItems: 'center'
    },
})

export default FindingId;