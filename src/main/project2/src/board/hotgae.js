/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity,TextInput,FlatList, SafeAreaView,Image} from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import test_image from './image/Test.jpg';
import axios from 'axios';


 _Item = ({ user,title,content,like,image}) => (

    <View style = {styles.titlebox}>
        <View style = {{flexDirection : 'row'}}>
            <Image
            style = {styles.userimage}
            source = {image}
            resizeMode = 'stretch'
            />
             <View style = {{width: "70%"}}>
              <Text> 제목:{title}</Text>
               <Text numberOfLines = {3}
                  style = {styles.content}> {content}</Text>
             </View>
          </View>
          <View style = {{  flexDirection : 'row'}}>
           <View>
               <Text style = {{fontSize : 10}}>좋아요 : {like}</Text>
           </View>
           <View>
              <Text style = {{fontSize : 10}}>작성자 : {user}</Text>
           </View>
        </View>
    </View>

  );



class Hotgaesi extends Component {
  /*componentDidMount () {
    axios.get ("www.naver.com")
      .then (response => {
        const list_data = response.data;
        this.setState ({list_data});
      })
  } */

    state = {
      list_data :
    [
     {
         num : "1",
         user: "규철",
         title: "1st",
         content: "content " ,
         like: 5 ,
         image  : test_image
          },
       {
         num: "2",
         user: "휘경",
         title: "2nd",
         content: "content",
         like : 3,
         image  : test_image
       },
       {
        num: "3",
        user: "지환",
        title: "3th",
        content: "content",
        like : 4,
        image  : test_image
      },
      {
        num: "4",
        user: "준기",
        title: "4th",
        content: "content",
        like : 4,
        image  : test_image
      },
      {
        num: "5",
        user: "규빈",
        title: "5th",
        content: "content",
        like : 4,
        image  : test_image
      },
      {
        num: "6",
        user: "규철",
        title: "6th",
        content: "long~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ content",
        like : 2,
        image  : test_image
      },
      {
        num: "7",
        user: "휘경",
        title: "7th",
        content: "long~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ content",
        like : 1,
       image  : test_image
      },
      {
        num: "8",
        user: "지환",
        title : "8th",
        content: "long~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ content",
        like : 4,
        image  : test_image
      },
      {
        num : "9",
        user: "규철",
        title: "1st",
        content: "content " ,
        like: 5 ,
        image  : test_image
         },
      {
        num: "10",
        user: "휘경",
        title: "2nd",
        content: "content",
        like : 3,
        image  : test_image
      },
      {
       num: "11",
       user: "지환",
       title: "3th",
       content: "content",
       like : 4,
       image  : test_image
     },
     {
       num: "12",
       user: "준기",
       title: "4th",
       content: "content",
       like : 4,
       image  : test_image
     },
     {
       num: "13",
       user: "규빈",
       title: "5th",
       content: "content",
       like : 4,
       image  : test_image
     },
     {
       num: "14",
       user: "규철",
       title: "6th",
       content: "long~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ content",
       like : 2,
       image  : test_image
     },
     {
       num: "15",
       user: "휘경",
       title: "7th",
       content: "long~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ content",
       like : 1,
      image  : test_image
     },
     {
       num: "16",
       user: "지환",
       title : "8th",
       content: "long~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ content",
       like : 4,
       image  : test_image
     },
     {
      num : "17",
      user: "규철",
      title: "1st",
      content: "content " ,
      like: 5 ,
      image  : test_image
       },
    {
      num: "18",
      user: "휘경",
      title: "2nd",
      content: "content",
      like : 3,
      image  : test_image
    },
   ]

 }


renderItem = ({ item }) => {
  return (
    <TouchableOpacity
    onPress = {() => this.props.navigation.navigate('read')}>
     <_Item
       image = {item.image}

        user = {item.user}
        content = {item.content}
        like = {item.like}
        title = {item.title}
   />
   </TouchableOpacity>
  );
};

render(){
    return (
       <SafeAreaView>
          <FlatList
           data = {this.state.list_data}
           renderItem= {this.renderItem}
           keyExtractor = {(item) => item.num}
           refreshing = {true}
          />
           <View>
            <TouchableOpacity style = {styles.post}
             onPress = { () => this.props.navigation.navigate('글 쓰기')}  >
              <Text>
                 글 쓰기
              </Text>
            </TouchableOpacity>
         </View>
         </SafeAreaView>
    )
}
}
const styles= StyleSheet.create({
  titlebox : {
    borderTopWidth : 1,
    borderColor : "#eb9e42"

  },
  userimage: {
    width: "25%",
    height : 60,
  },
  content:{
    fontSize : 15,
    alignItems : 'center',
    justifyContent : 'center',
    paddingRight : 10
  },
  post:{
    position: 'absolute',
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: '40%',
    bottom: 30,
    backgroundColor : "#ffbe70",
    borderRadius : 10
  },
})

export default Hotgaesi;