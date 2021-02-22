import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Researchercard2 from './researcherV2';

class changeUser extends Component {

    render(){
        return (
            <View style = {styles.mainView}>
                <Researchercard2/>
                <TouchableOpacity
                    style={styles.changeInfButton2}
                    onPress = {()=>{
                        this.props.navigation.navigate('닉네임 변경')
                    }}
                >
                    <Text style={{fontSize: 13}}>닉네임 변경</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.changeInfButton3}
                    onPress = {()=>{
                        this.props.navigation.navigate('개인특성 변경')
                    }}
                >
                    <Text style={{fontSize: 13}}>개인특성 변경</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.changePWButton}
                    onPress = {()=>{
                        this.props.navigation.navigate('비밀번호 변경')
                    }}
                >
                    <Text style={{fontSize: 15}}>비밀번호 변경</Text>
                </TouchableOpacity>
                <Text style = {{fontSize : 18, bottom : '14%',}}>체크리스트</Text>

                <View style = {styles.changeSkinView}>
                    <TouchableOpacity
                        style={styles.changeInfButton}
                        onPress = {()=>{
                            this.props.navigation.navigate('피부타입 checklist 변경')
                        }}
                    >
                        <Text style={{fontSize: 15}}>피부타입 checklist 다시하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.changeInfButton}
                        onPress = {()=>{
                            this.props.navigation.navigate('피부고민 checklist 변경')
                        }}
                    >
                        <Text style={{fontSize: 15,}}>피부고민 checklist 수정하기</Text>
                    </TouchableOpacity>
                </View>
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
    changeSkinView:{
        borderColor:'#dea112',
        borderWidth : 1,
        width: '80%',
        bottom : '14%',
        alignItems:'center',
    },
    changePWButton: {
        width: '64%',
        alignItems: 'center',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        borderWidth: 0.5,
        padding: 7,
        bottom: '17%',
        marginTop: 10,
        marginBottom: 10,
    },
    changeInfButton: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        borderWidth: 0.5,
        padding: 7,
        marginTop: 10,
        marginBottom: 10,
    },
    changeInfButton2: {
        width: '35%',
        alignItems: 'center',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        left: '22%',
        bottom : '36%',
        borderWidth: 0.5,
        padding: 7,
        marginTop: 10,
        marginBottom: 10,
    },
    changeInfButton3: {
        width: '35%',
        alignItems: 'center',
        backgroundColor: '#f5eccb',
        borderColor:'#dea112',
        left: '22%',
        bottom : '30%',
        borderWidth: 0.5,
        padding: 7,
        marginTop: 5,
        marginBottom: 10,
    },
})

export default changeUser;
