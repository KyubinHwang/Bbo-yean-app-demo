import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

class UserInf extends Component {

    render(){
        return (
            <View style = {styles.mainView}>
                <View
                    style={styles.InformBox}
                >
                    <Text style = {{paddingTop: '3%', paddingLeft: '2%',paddingBottom: '3.4%'}}>· 내 정보</Text>
                    <Text style = {styles.InformText}>닉네임</Text>
                    <Text style = {styles.InformText}>아이디</Text>
                    <Text style = {styles.InformText}>피부 타입</Text>
                    <Text style = {styles.InformText}>피부 고민</Text>
                </View>
                
                <View style = {styles.InformBox}>
                    <Text style = {{paddingTop: '3%', paddingLeft: '2%',paddingBottom: '3.4%'}}>· 개인 특성</Text>
                    <Text style = {styles.InformText}>수면 시간</Text>
                    <Text style = {styles.InformText}>세안 온도</Text>
                    <Text style = {styles.InformText}>세안 횟수</Text>
                    <Text style = {styles.InformText}>스트레스(1~5)</Text>
                    <Text style = {styles.InformText}>세안제 종류</Text>
                    <Text style = {styles.InformText}>음식(인스턴트 섭취 횟수)</Text>
                </View>
                <TouchableOpacity
                    title = "정보 수정"
                    onPress={()=>{
                        this.props.navigation.navigate('정보')
                    }}
                >
                    <Text style = {{marginTop: 20}}>내 정보 변경</Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        paddingTop: 20,
        width:'100%',
        marginLeft: 20,
    },
    InformBox: {
        marginTop: 15,
        borderWidth: 1,
        borderColor:'#dea112',
        width: '90%',
    },
    InformText: {
        paddingTop: 4,
        paddingBottom: 14,
        paddingLeft: '5%',
        fontSize: 12.5
    },
})

export default UserInf;
