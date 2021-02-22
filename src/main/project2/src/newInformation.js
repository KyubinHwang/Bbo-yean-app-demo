import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';


class NewInf extends Component {

    state = {
        ID: '',
        PW: '',
        PWT: '',
        EMAIL: '',
        NickNAME: ''
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
    onChangePWT = (event) => {
        this.setState ({
            PWT: event
        })
    }
    onChangeEMAIL = (event) => {
        this.setState ({
            EMAIL: event
        })
    }
    onChangeNickNAME = (event) => {
        this.setState ({
            NickNAME: event
        })
    }

    render(){
        return (
            <View style = {styles.mainView}>
                
                <Text style = {{fontSize:30}}>회원가입</Text>
                
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

                <TextInput value = {this.state.PW}
                style = {styles.input}
                onChangeText={this.onChangePW}
                placeholder = "비밀번호"
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TextInput value = {this.state.PWT}
                style = {styles.input}
                onChangeText={this.onChangePWT}
                placeholder = "비밀번호 확인"
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TextInput value = {this.state.EMAIL}
                style = {styles.input}
                onChangeText={this.onChangeEMAIL}
                placeholder = "이메일 주소"
                multiline={true}
                maxLength = {30}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TextInput value = {this.state.NickNAME}
                style = {styles.input}
                onChangeText={this.onChangeNickNAME}
                placeholder = "닉네임"
                multiline={true}
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>

                <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress = {()=>{
                        if( this.state.PW === this.state.PWT && this.state.ID.length <= 20 && this.state.ID.length >= 6 && this.state.EMAIL.includes('@')) {
                            this.props.navigation.navigate('시작')
                             axios.post('http://192.168.35.7:8080/members/new',{
                                 name: this.state.ID,
                                 password: this.state.PW,
                                 email: this.state.EMAIL,
                                 nickname: this.state.NickNAME
                             }).then(response => {
                                 console.log(response.data);
                             }).catch(error => {
                                 console.log(error);
                             })
                        }
                        else if (this.state.ID.length < 6){
                            Alert.alert('','아이디는 6자리 이상 20자리 이하로 설정해주세요.');
                        }
                        else if(this.state.PW != this.state.PWT){
                           Alert.alert('','비밀번호가 일치하지 않습니다.');
                        }
                        else if(!this.state.EMAIL.includes('@')){
                            Alert.alert('','올바른 이메일 형식이 아닙니다.');
                        }
                    }}
                >
                        <Text>제출하기</Text>
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
    back:{
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        borderWidth: 0.5,
        padding: 8,
        alignItems: 'center'
    },
})

export default NewInf;