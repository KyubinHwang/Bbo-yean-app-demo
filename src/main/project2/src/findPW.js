import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';


class FindingPw extends Component {

    state = {
        ID: '',
        PW: '',
        EMAIL: '',
    }
    onChangeID = (event) => {
        this.setState ({
            ID: event
        })
    }
    onChangePW = (event) => {
        this.setState ({
            PW: event
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
                    <Text
                    onPress = {()=>{
                          this.props.navigation.navigate('아이디 찾기')
                      }}>아이디 찾기</Text>
                    <Text style = {{color: '#dea112'}}>   비밀번호 찾기</Text>
                </View>
                <TextInput value = {this.state.ID}
                style = {styles.input}
                onChangeText={this.onChangeID}
                placeholder = "아이디"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                editable={true}
                >
                </TextInput>

                <TextInput value = {this.state.EMAIL}
                style = {styles.input}
                onChangeText={this.onChangeEMAIL}
                placeholder = "가입시 입력한 이메일"
                maxLength = {30}
                autoCapitalize={'none'}
                >
                </TextInput>
                <TouchableOpacity
                    style = {styles.find}
                    onPress = {()=>{
                        axios.post('http://192.168.35.7:8080/members/findpassword',{
                             email: this.state.EMAIL,
                             name : this.state.ID,
                         }).then(response => {
                             console.log(response.data.password);
                             Alert.alert('-일치하는 비밀번호-',response.data.password);
                         }).catch(error => {
                             console.log(error);
                         })
                    }}
                >
                    <Text color = {'white'}>비밀번호 찾기</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.back}
                    onPress = {()=>{
                        this.props.navigation.navigate('Login')
                    }}
                >
                    <Text color = {'white'}>뒤로가기</Text>
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

export default FindingPw;