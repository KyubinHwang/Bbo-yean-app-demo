import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';


class CheckStart extends Component {
  StartButton = () => (
s
 )

   render(){
        return(
            <View style = {styles.mainView}> 
            <View style = {styles.subView}>
                <Text style ={ {fontSize : 25 , left: '33%', top:10}} >
                       Checklist
                </Text>
                 <Text style = {styles.InformBox}>
                  다음의 체크리스트는 연구원님들간의 원활한 정보 공유를 위한 체크리스트입니다.               
                 </Text>
                 <TouchableOpacity onPress = {()=>{
                        this.props.navigation.navigate("피부타입 체크리스트") 
                    }}
                    style = {styles.startBox} >
                     <Text>
                             시작하기
                     </Text>
              </TouchableOpacity>
              </View>    
            </View>
        )
    } 
}

const styles= StyleSheet.create({
    mainView: {
        backgroundColor : '#f7f0d7',
        flex: 1,
        paddingTop: '45%',
        width:'100%',
        alignItems:'center',
    },
    subView: {
        borderWidth: 1,
        backgroundColor: '#f7f4e9',
        borderColor:'#dea112',  
        width: '90%'
    },
    InformBox: {
        fontSize: 15,
        marginTop: "5%",
        marginBottom: '5%',
        padding : "3%"
        
    },
    startBox:{
        backgroundColor: '#f7f4e9',
        borderColor:'#dea112',
        borderWidth: 1,
        fontSize: 17,
        alignItems : 'center',
        justifyContent: 'center',
        left: '25%',
        height: '20%',
        width: "50%",
        marginBottom: "5%",
    }
})  

export default CheckStart;