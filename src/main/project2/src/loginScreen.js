import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';

class Input extends Component {

    state = {
        ID: '',
        PW: '',
        UserID: '',
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

    render(){
        return (
            <View style = {styles.mainView}>
                <Text style = {{fontSize: 20}} >뽀송뽀송의 노하우</Text>
                <Text style = {{fontSize: 35, marginTop: 27}} >로그인</Text>
                <TextInput value = {this.state.ID}
                style = {styles.input}
                onChangeText={this.onChangeID}
                placeholder = "ID"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                editable={true}
                >
                </TextInput>
                
                <TextInput value = {this.state.PW}
                style = {styles.input}
                onChangeText={this.onChangePW}
                placeholder = "PassWord"
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TouchableOpacity 
                    style = {styles.loginButton}
                    onPress = {()=>{
                         axios.post('http://192.168.35.7:8080/members/login',{
                             name: this.state.ID,
                             password: this.state.PW,
                         }).then(response => {
                             if(response.data.state === "true")
                                {
                                this.props.navigation.navigate('Main');
                                }
                             else
                                Alert.alert('','아이디 또는 비밀번호가 올바르지 않습니다!')
                         }).catch(error => {
                             console.log(error);
                         })
                    }}
                >
                    <Text style= {{
                            textAlign: 'center',
                            fontSize: 18,
                        }}
                        >뽀연 로그인
                    </Text>
                </TouchableOpacity>
                <View style= {{flexDirection: 'row',}}>
                    <TouchableOpacity
                        style = {styles.FindIDPW}
                        onPress = {()=>{
                            this.props.navigation.navigate('아이디 찾기')
                        }}
                    >
                        <Text>아이디/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.FindIDPW}
                        onPress = {()=>{
                            this.props.navigation.navigate('비밀번호 찾기')
                        }}
                    >
                        <Text>비밀번호 찾기</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style = {styles.NewInformation}
                    onPress = {()=>{
                        this.props.navigation.navigate('회원가입')
                    }}
                >
                    <Text>회원가입</Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        backgroundColor : '#f7f0d7',
        flex: 1,
        paddingTop: 60,
        width:'100%',
        alignItems:'center',
    },
    input: {
        width: '75%',
        backgroundColor: '#f7f4e9',
        borderColor:'#dea112',
        borderWidth: 1,
        marginTop: 10,
        fontSize: 20,
        padding: 10,
    },
    loginButton: {
        width: '55%',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        borderWidth: 0.5,
        padding: 7,
        marginTop: 13,
    },
    FindIDPW:{
        marginTop: 13,
    },
    NewInformation: {
        width: '45%',
        padding: 7,
        alignItems: 'center',
        marginTop: 5,
    },
})

export default Input;
