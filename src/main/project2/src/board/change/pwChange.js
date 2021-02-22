import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';

class pwC extends Component {

    state = {
        PW: '',
        NPW: '',
        NPWT: '',
    }
    onChangePW = (event) => {
        this.setState ({
            PW: event
        })
    }
    onChangeNPW = (event) => {
        this.setState ({
            NPW: event
        })
    }
    onChangeNPWT = (event) => {
        this.setState ({
            NPWT: event
        })
    }

    render(){
        return (
            <View style = {styles.mainView}>
                <TextInput value = {this.state.PW}
                style = {styles.input}
                onChangeText={this.onChangePW}
                placeholder = "현재 비밀번호"
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>
                <TextInput value = {this.state.NPW}
                style = {styles.input}
                onChangeText={this.onChangeNPW}
                placeholder = "새 비밀번호"
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>
                <TextInput value = {this.state.NPWT}
                style = {styles.input}
                onChangeText={this.onChangeNPWT}
                placeholder = "새 비밀번호 확인"
                maxLength = {20}
                autoCapitalize={'none'}
                secureTextEntry = {true}
                >
                </TextInput>
                <TouchableOpacity style={styles.changeInfButton}
                    onPress = {()=>{
                         axios.post('http://192.168.35.7:8080/members/personal/1',{
                             sleeping_Hours: this.state.Sleeping_Hours,
                             wash_Temperature: this.state.Wash_Temperature,
                             wash_Num: this.state.Wash_Num,
                             stress: this.state.Stress,
                             collyrium: this.state.Collyrium,
                             food: this.state.Food,
                         }).then(response => {
                             Alert.alert('','개인특성이 변경되었습니다.');
                             this.props.navigation.navigate('정보');
                         }).catch(error => {
                             console.log(error);
                         })
                    }}
                >
                    <Text style={{fontSize: 15}}>비밀번호 변경</Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        paddingTop: 30,
        width:'100%',
        alignItems:'center',
    },
    changeInfButton: {
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        borderWidth: 0.5,
        padding: 7,
        marginTop: 13,
    },
    input: {
        width: '75%',
        backgroundColor: 'white',
        borderColor:'#dea112',
        borderWidth: 1,
        marginTop: 20,
        fontSize: 15,
        padding: 10,
    },
})

export default pwC;
