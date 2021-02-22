/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity,TextInput, Alert } from 'react-native';
import axios from 'axios';

class Write extends Component {
headerStyle = () => {
        this.props.navigation.setOptions({
            title: '글 쓰기',
            headerRight: () => (
                <View>
                    <TouchableOpacity
                    style = {styles.rightheaderstyle}
                    onPress = {()=>{this.createTwoButtonsubmit()
                    console.log(this.state.name)
                    }

                    }>
                          <Text> 완료 </Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }

state = {
    title : "",
    content : "",
    user: 1,
    name : ""
}


post_writing = () => {
    this.props.navigation.navigate("블랙헤드")
       axios.post('http://192.168.35.7:8080/board/post?memberId=1&category=oily', {
//           category : this.state.name,
           title : this.state.title,
//           memberId : this.state.user,
           content : this.state.content
       }).then(response => { console.log(response);
       }).catch(error => { console.log(error) });
}


createTwoButtonsubmit = () =>
     Alert.alert(                    // 말그대로 Alert를 띄운다
      "",                    // 첫번째 text: 타이틀 제목
      "글에는 연구원증이 함께 게시됩니다.",                         // 두번째 text: 그 밑에 작은 제목
      [                              // 버튼 배열
        {
          text: "확인",                              // 버튼 제목
          onPress : () => this.post_writing()//onPress 이벤트시 콘솔창에 로그를 찍는다
        },
        { text: "취소",//버튼 제목
         onPress: () => console.log("취소") }, // 이벤트 발생시 로그를 찍는다
      ],
      { cancelable: false }
    );

onChangetitle = (event) => {
    this.setState ({
        title: event
    })
}
onChangeContent = (event) => {
    this.setState ({
        content: event
    })
}
onChangename = (event) => {
    this.setState ({
        name: event
    })
}
   render(){
        this.state.name = this.props.route.params.category_name
        this.headerStyle();
        return(
            <View style = {styles.mainView}>
                <View>
                     <TextInput
                      value = {this.state.title}
                       style = {styles.titleInput}
                       multiline = {false}
                       maxLength = {40}
                       placeholder = "제목:"
                       onChangeText ={this.onChangetitle}
                       underlineColorAndroid="transparent"
                       />
                </View>
               <View style = {styles.contentBox}>
                  <TextInput
                    value = {this.state.content}
                    onChangeText = {this.onChangeContent}
                    multiline={true}
                    placeholder = "여기에 글을 작성합니다."
                    style = {{height:"100%"}}
                    underlineColorAndroid="transparent"
                 />
               </View>
            </View>
        )
    } 
}
/*<View style = {{height : '10%'}}>
<TouchableOpacity
  style = {styles.SubmitButton}
  onPress = {()=>{this.createTwoButtonsubmit()}}>
    <Text> 글쓰기 </Text>  
 </TouchableOpacity>
</View>*/

const styles= StyleSheet.create({
    mainView: {
        left : '5%',
        marginTop: '8%'
    },
    title: {
        fontSize : 17
    },
    titleInput:
    {
         width: "90%",
         height : 40,
         bottom : '35%',
    },
    contentBox: {
        width: '90%' ,
        height: '97%',
        borderTopWidth: 1,
        borderColor:'#dea112',
        bottom : 13,
        },
    SubmitButton:
    {
        borderWidth: 1,
        width : "20%",
        height : 35,
        alignItems :'center',
        justifyContent :'center',
        borderColor : '#dea112',
        marginTop : 20,
        left : '15%'
        },

    Cancelbutton:
    {
        borderWidth: 1,
        width : "20%",
        height : 35,
        alignItems :'center',
        justifyContent :'center',
        borderColor : '#dea112', 
        left : '55%',
        bottom : 35
    },
    rightheaderstyle : {
        right : 10,
        borderRadius: 25,
        borderWidth : 1,
        padding : 9,
        backgroundColor :  '#faa157'


    }
})  

export default Write;