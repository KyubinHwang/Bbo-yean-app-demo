import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Animated from "react-native-reanimated";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Researcher from './images/rbqls.jpg';

class Researchercard extends Component {

    state = {
        name: '',
        skin_status : '',
        skintype: [],
        sleeping_Hours : '',
        stress : '',
        wash_Num : '',
        wash_Temperature : '',
        food : '',
        collyrium : '',
        sensitive_status : '',
    }

    componentDidMount (){
        axios.get('http://192.168.35.7:8080/members/information_1/1')
        .then(response => {
        console.log(response.data.sensitive_status);
             this.setState({name : response.data.nickname});
             this.setState({skin_status : response.data.skin_status});
             this.setState({skintype : response.data.skintype});
             this.setState({sleeping_Hours : response.data.sleeping_Hours});
             this.setState({stress : response.data.stress});
             this.setState({wash_Num : response.data.wash_Num});
             this.setState({wash_Temperature : response.data.wash_Temperature});
             this.setState({food : response.data.food});
             this.setState({collyrium : response.data.collyrium});
             this.setState({sensitive_status : response.data.sensitive_status});
         }).catch(error => {
             console.log(error);
         })
    }

    render(){
        return (
                    <View style = {styles.card}>
                        <View>
                            <Image
                                style = {{width : 80, height: 130, borderRadius : 20}}
                                source = {Researcher}
                            />
                        </View>
                        <View style = {{flex : 1, marginHorizontal: 12, overflow: "hidden"}}>
                             <Text style = {styles.InformText}>닉네임 : {this.state.name}</Text>
                             <Text style = {{fontSize: 12.5 , color : '#b0530c'}}>피부 타입 : {this.state.skin_status}, {this.state.sensitive_status}</Text>
                             <Text style = {{fontSize: 12.5 , color : '#b0530c'}}>피부 고민 : {this.state.skintype}</Text>
                             <Text style = {{paddingTop: 10, fontSize: 12.5 , color : '#b0530c'}}>수면 시간 : {this.state.sleeping_Hours}</Text>
                             <Text style = {styles.InformText}>세안 온도 : {this.state.wash_Temperature}</Text>
                             <Text style = {styles.InformText}>세안 횟수 : {this.state.wash_Num}</Text>
                             <Text style = {styles.InformText}>스트레스(1~5) : {this.state.stress}</Text>
                             <Text style = {styles.InformText}>세안제 종류 : {this.state.collyrium}</Text>
                             <Text style = {styles.InformText}>음식(인스턴트 섭취 횟수) : {this.state.food}</Text>
                        </View>
                    </View>                    
        )
    } 
}

const styles= StyleSheet.create({
    InformText: {
        fontSize: 12.5,
        color: '#b0530c',
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
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor:'#dea112',
        shadowColor: '#000',
        marginBottom : 500,
    },
})

export default Researchercard;