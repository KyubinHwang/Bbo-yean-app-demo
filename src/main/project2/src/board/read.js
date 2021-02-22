/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity,ScrollView,TextInput,FlatList, SafeAreaView,Image ,Alert} from 'react-native';
import test_image from './image/Test.jpg';
import axios from 'axios';


const Item = ({ user,comment, image }) => (
    <View style = {{borderTopWidth: 1, borderColor : '#dea112' }}>
        <View style = {styles.mainItem}>
         <View style = {styles.userbox}>
            <Text> {user}</Text>
          </View>
          <View>
          <Image
            style = {styles.userimage}
            source = {image}
            resizeMode = 'stretch'
          />
          </View>

        <View style={styles.box}>
           <Text style={styles.comment}>{comment}</Text>
        </View>
        </View>
    </View>
  );

class Read extends Component {
   //title 데이터 읽어오기, user 읽어와서 맞는 연구원증 띄우기, content 띄우기



    state = {
        list:{
        title : "",
        content : "",
        user_ID: "",
        num : ""
        },
        content_like: "",
        contentlike_state : false,
        post_comment : "",
        DATA :
[
  {
      num : "1",
      user: "규철",
      comment:"First Comment long comment First Comment long comment First Comment long comment ",
      image: test_image
  },
   {
      num: "2",
      user: "휘경",
      comment:"Second Comment",
      image: test_image
   }
  ]
 }
    onChangeComment = (event) => {
        this.setState ({
            post_comment: event
        })
    }

        renderItem = ({ item }) => {
        return (
         <Item
            user = {item.user}
            comment = {item.comment}
            image = {item.image}

         />
        );
      };
ShowingUser = () =>
(
 1    //user 값에 맞는 연구원증
)
selectlike = () => {
 if(this.state.contentlike_state == false)
 {
    this.setState({
        contentlike_state : true,
    })
 }
 else
 {
    this.setState({
        contentlike_state : false,
    })
 }
}


submit_comment = () => {
    if (this.state.post_comment != "")
    {
         /*axios.post('http://192.168.35.7:8080/members/new',{
         ID : this.state.user_ID,
         comment : this.state.post_comment}).then(response => {
         console.log(response.data);
         }).catch(error => {
        console.log(error);
        alert ("댓글 저장에 실패했습니다")
        })*/
        this.setState (prevState=> {
            return {
                post_comment : ""
            }
        })
}
else {
    Alert.alert("","댓글을 입력하세요.")
    }
}


//like값을 바꾸는 함수 추가


   render(){
    this.state.list.title = this.props.route.params.title
    this.state.list.content = this.props.route.params.content
    this.state.content_like = this.props.route.params.content_like
    this.state.list.num = this.props.route.params.num
        return(
           <View style = {styles.mainView} >
                <Text style = {styles.title}> 제목: {this.state.list.title} </Text>
                <View>

                </View>
                <View style = {styles.contentBox}>
                    <Text>{this.state.list.content}</Text>
                </View>
                <View style = {styles.LikeBox}>
                    <TouchableOpacity
                        onPress = {() => {this.selectlike()
                        console.log(this.state.list.num)}}>
                        <Text> 좋아요 {this.state.content_like}</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.commentBox}>
                    <TouchableOpacity>
                        <Text>
                            댓글달기
                        </Text>
                    </TouchableOpacity>
                </View>
               <View style= {{borderWidth: 1, borderColor: "#dea112", bottom : 30, borderTopWidth: 0, height: 60}}>
                   <View style = {{flexDirection : "row"}}>
                       <Image
                       source =  {test_image}
                       style = {{height : 40, width : "10%",borderRadius : 100, left : 5, marginTop : 8}}/>
                     <TextInput
                           value = {this.state.post_comment}
                           onChangeText = {this.onChangeComment}
                           multiline={true}
                           placeholder = "댓글을 입력하세요.."
                           style = {{borderWidth: 1, height: 40, width : "70%", left: 15, marginTop: 8, borderRadius: 20}}
                           underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity
                     style = {{ left: 25, borderWidth : 1, width : '10%' ,alignItems :'center', justifyContent : "center", height : 40, borderRadius : 20 , marginTop : 8}}
                     onPress = {() => this.submit_comment() }
                    >
                       <Text >
                        게시
                      </Text>
                    </TouchableOpacity>
                 </View>
               </View>
               <SafeAreaView style = {{bottom : 30}}>
               <FlatList
                    data = {this.state.DATA}
                    renderItem= {this.renderItem}
                    keyExtractor = {(item) => item.num}
                />
                </SafeAreaView>
         </View>

        )
    }
}

//                         axios.post('http://192.168.35.7:8080/members/new',{
//                             checkBoolean1: this.state.list_0,
//                             checkBoolean2: this.state.list_1,
//                         }).then(response => {
//                             console.log(response.data);
//                         }).catch(error => {
//                             console.log(error);
//                         })


const styles= StyleSheet.create({
    mainView: {
        width: "100%",
        marginTop: '8%'
    },
    title: {
        fontSize : 17 ,
        left : "5%",
        marginBottom : 10
    },
    contentBox:{
        width: '90%',
        left : "5%"
    },
    LikeBox: {
        width: "50%",
        borderWidth: 1,
        borderColor: "#dea112",
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    commentBox: {
        width: "50%",
        borderWidth: 1,
        borderColor: "#dea112",
        height: 30,
        alignItems: 'center',
        bottom : 30,
        left: '50%',
        justifyContent: 'center'
    },
    commentlist:{
        width: "90%",
        left: "5%"
    },
    commentView :{

        borderColor : '#dea112'
    },
    commentContainer:
    {
      borderWidth: 1,
      padding : 8
    },
    commentCard: {
      paddingHorizontal : 8,
      paddingVertical: 8,
      marginVertical : 8
    },
    commnet: {
      fontSize: 16,
    },

      mainItem: {
          flexDirection : 'row',
          padding : 15,
          width:  '90%'
      },
      userbox:{
        borderColor : '#dea112',
        right : '10%',
        bottom : 12

      },
        box: {
        borderWidth: 1,
        borderColor : '#dea112' ,
        borderRadius: 9,
        paddingVertical : 8,
        paddingHorizontal : 10,
        justifyContent : 'center',
        right : 30,
        top : 8,
      },
      userimage: {
        width: 40,
        height : 40,
        borderRadius : 100,
        right: 35,
        top: 8,
      },
})  

export default Read;