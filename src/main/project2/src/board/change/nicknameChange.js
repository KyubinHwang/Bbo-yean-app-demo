import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';

class nnC extends Component {
    state = {
        NickNAME: ''
    }
    onChangeNickNAME = (event) => {
        this.setState ({
            NickNAME: event
        })
    }
    render(){
        return (
            <View style = {styles.mainView}>
                <TextInput value = {this.state.NickNAME}
                style = {styles.input}
                onChangeText={this.onChangeNickNAME}
                placeholder = "변경할 닉네임"
                maxLength = {20}
                autoCapitalize={'none'}
                ></TextInput>
                <TouchableOpacity style={styles.changeInfButton}
                    onPress = {()=>{
                         axios.post('http://192.168.35.7:8080/members/nickname/1',{
                             nickname: this.state.NickNAME,
                         }).then(response => {
                             Alert.alert('','닉네임이 변경되었습니다.');
                             this.props.navigation.navigate('정보');
                         }).catch(error => {
                             console.log(error);
                         })
                    }}
                >
                    <Text style={{fontSize: 15}}>닉네임 변경</Text>
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

export default nnC;
