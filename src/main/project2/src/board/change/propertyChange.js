import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import axios from 'axios';

class ppC extends Component {
    state = {
        Sleeping_Hours: "",
        Wash_Temperature: "",
        Wash_Num: "",
        Stress: "", 
        Collyrium: "",
        Food: ""
    }
    onChangeSleeping_Hours = (event) => {
        this.setState ({
            Sleeping_Hours: event
        })
    }
    onChangeWash_Temperature = (event) => {
        this.setState ({
            Wash_Temperature: event
        })
    }
    onChangeWash_Num= (event) => {
        this.setState ({
            Wash_Num: event
        })
    }
    onChangeStress = (event) => {
        this.setState ({
            Stress: event
        })
    }
    onChangeCollyrium = (event) => {
        this.setState ({
            Collyrium: event
        })
    }
    onChangeFood = (event) => {
        this.setState ({
            Food: event
        })
    }
    render(){
        return (
            <View style = {styles.mainView}>
                <TextInput value = {this.state.Sleeping_Hours}
                style = {styles.input}
                onChangeText={this.onChangeSleeping_Hours}
                placeholder = "수면시간"
                maxLength = {10}
                >
                </TextInput>
                <TextInput value = {this.state.Wash_Temperature}
                style = {styles.input}
                onChangeText={this.onChangeWash_Temperature}
                placeholder = "세안 온도"
                maxLength = {10}
                >
                </TextInput>
                <TextInput value = {this.state.Wash_Num}
                style = {styles.input}
                onChangeText={this.onChangeWash_Num}
                placeholder = "세안 횟수 (일)"
                maxLength = {10}
                >
                </TextInput>
                <TextInput value = {this.state.Stress}
                style = {styles.input}
                onChangeText={this.onChangeStress}
                placeholder = "스트레스 (1~5)"
                maxLength = {10}
                >
                </TextInput>
                <TextInput value = {this.state.Collyrium}
                style = {styles.input}
                onChangeText={this.onChangeCollyrium}
                placeholder = "세안제 종류(폼,오일,밀크,로션,워터,티슈)"
                maxLength = {10}
                >
                </TextInput>
                <TextInput value = {this.state.Food}
                style = {styles.input}
                onChangeText={this.onChangeFood}
                placeholder = "음식(일일 인스턴트 섭취 횟수)"
                maxLength = {10}
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
                    <Text style={{fontSize: 15,}}>개인 특성 변경</Text>
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

export default ppC;
