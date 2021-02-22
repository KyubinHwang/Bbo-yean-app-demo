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



class DrawerBoard8 extends Component {
/*  componentDidMount () {
    axios.get ("/board/list")
      .then (response => {
        const list_data = response.data;
        this.setState ({list_data});
      })
  }
*/
    state = {
      list_data :
    [
     {
         num : "1",
         user: "규철",
         title: "1st",
         content: "content " ,
         like: "5" ,
         image  : test_image
          },
       {
         num: "2",
         user: "휘경",
         title: "2nd",
         content: "content",
         like : "3",
         image  : test_image
       },
       {
        num: "3",
        user: "지환",
        title: "3th",
        content: "content",
        like : "4",
        image  : test_image
      },

   ],
      category_name : "주름"
 }


renderItem = ({ item }) => {
  return (
    <TouchableOpacity
    onPress = {() => this.props.navigation.navigate('read', {num : item.num, title : item.title, content : item.content, content_like : item.like})}
    >
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

/*Read_Board = () => {
      this.props.navigation.navigate('read')
      axios.post('/board/post', { title : this.state.title, memberEntity : this.state.user, content : this.state.content })
       .then(function (response) { console.log(response); })
       .catch(error => { console.log('error : ',error.response) });
} */

render(){
    return (
       <SafeAreaView style = {{flex : 1}}>
          <FlatList
           data = {this.state.list_data}
           renderItem= {this.renderItem}
           keyExtractor = {(item) => item.num}
           refreshing = {true}
          />
           <View>
            <TouchableOpacity style = {styles.post}
             onPress = { () => this.props.navigation.navigate("글 쓰기", {category_name : this.state.category_name})

             }  >
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

export default DrawerBoard8;