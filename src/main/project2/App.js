import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button,StyleSheet,ScrollView,View,Text,Image,TouchableOpacity } from 'react-native';
import Input from './src/loginScreen';
import FindingId from './src/findID';
import FindingPw from './src/findPW';
import NewInf from './src/newInformation';
import DrawerMain from './src/mainhome';
import UserInf from './src/board/userInf';
import changeUser from './src/board/changeInf';
import Hotgaesi from './src/board/hotgae';
import Board from './src/board/board';
import Read from './src/board/read';
import Write from './src/board/write';
import DrawerBoard1 from './src/board/board1';
import DrawerBoard2 from './src/board/board2';
import DrawerBoard3 from './src/board/board3';
import DrawerBoard4 from './src/board/board4';
import DrawerBoard5 from './src/board/board5';
import DrawerBoard6 from './src/board/board6';
import DrawerBoard7 from './src/board/board7';
import DrawerBoard8 from './src/board/board8';
import Researchercard2 from './src/board/researcherV2';
import pwC from './src/board/change/pwChange';
import nnC from './src/board/change/nicknameChange';
import ppC from './src/board/change/propertyChange';
import CheckChange from './src/board/change/checkListChange';
import SkinChange from './src/board/change/skinChange';
import Check from './src/checkList';
import Skin from './src/skin';
import CheckStart from './src/startCheck';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
 } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return(
    <Drawer.Navigator
      initialRouteName = "Main"
      drawerType="front"
      drawerPosition = 'right'
      drawerStyle={{
        backgroundColor: '#f5f2e6',
        width: 180
      }}
      drawerContentOptions={{
        activeTintColor:'#f0c930',
        activeBackgroundColor:'#f2eca7',
      }}
    >
      <Drawer.Screen name = "Main" component={DrawerMain} options={{drawerIcon: () => (<Icon name={'ios-home'}/>)}}/>
      <Drawer.Screen name = "Hot 게시판" component={Hotgaesi} options={{drawerIcon: () => (<Icon name={'ios-flame'}/>)}}/>
      <Drawer.Screen name = "블랙헤드" component={Board} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "기름짐" component={DrawerBoard1} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "각질,모공" component={DrawerBoard2} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "여드름" component={DrawerBoard3} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "건조,당김" component={DrawerBoard4} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "홍조" component={DrawerBoard5} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "처짐,탄력" component={DrawerBoard6} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "피부톤" component={DrawerBoard7} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
      <Drawer.Screen name = "주름" component={DrawerBoard8} options={{drawerIcon: () => (<Icon name={'ios-chevron-forward-outline'}/>)}}/>
    </Drawer.Navigator>
  )
}

const HeaderButton = () =>{
  const navigation = useNavigation();
  return (
    <View style = {{flexDirection: 'row', paddingRight: 15}}>
      <Icon.Button
        name = {'reorder-three'}
        onPress={()=>{
          navigation.dispatch(DrawerActions.openDrawer())
        }}
        backgroundColor = '#fad782'
      >
      </Icon.Button>
    </View>
  )
}

const MainHomeButton = () => {
  const navigation = useNavigation();
  const jumpToAction = DrawerActions.jumpTo('Main',{ name: 'Main' });
  return (
    <View style = {{flexDirection: 'row', paddingLeft: 15}}>
      <Icon.Button
          name = {'ios-home'}
          onPress={()=>{
            navigation.dispatch(jumpToAction)
          }}
          backgroundColor = '#fad782'
        >
        </Icon.Button>
    </View>
  )
}

class App extends Component {
  state = {
  }
render(){
  return(
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName = "Login" //여기다가 자동로그인 
          >
            <Stack.Screen name = "Login" component = {Input} options = {optionss.stackView}/>
            <Stack.Screen name = "아이디 찾기" component = {FindingId} options = {optionss.stackView}/>
            <Stack.Screen name = "비밀번호 찾기" component = {FindingPw} options = {optionss.stackView}/>
            <Stack.Screen name = "회원가입" component = {NewInf} options = {optionss.stackView}/>
            <Stack.Screen name = "시작" component = {CheckStart} options = {optionss.stackView}/>
            <Stack.Screen name = "피부타입 체크리스트" component = {Check} options = {optionss.stackView}/>
            <Stack.Screen name = "피부고민 리스트" component = {Skin} options = {optionss.stackView}/>

            <Stack.Screen 
              name="Main" 
              component={DrawerComponent}
              options={{
                title: '뽀송뽀송 연구소',
                headerLeft: ({}) =><MainHomeButton/>,
                headerRight: ({}) =><HeaderButton/>,
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 40,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "글 쓰기"
              component = {Write}
              options={{
                title: '글 쓰기',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "read"
              component = {Read}
              options={{
                title: 'read',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "정보"
              component = {changeUser}
              options={{
                title: '정보 수정',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "비밀번호 변경"
              component = {pwC}
              options={{
                title: '비밀번호 변경',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "닉네임 변경"
              component = {nnC}
              options={{
                title: '닉네임 변경',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "개인특성 변경"
              component = {ppC}
              options={{
                title: '개인특성 변경',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "피부타입 checklist 변경"
              component = {CheckChange}
              options={{
                title: '피부타입 checklist 변경',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
            <Stack.Screen
              name = "피부고민 checklist 변경"
              component = {SkinChange}
              options={{
                title: '피부고민 checklist 변경',
                headerTitleAlign:'centers',
                headerStyle:{
                  height: 50,
                  backgroundColor: '#fad782'
                },
                headerTintColor: '#fff',
              }}
            >
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>  
  )
}

}
const optionss = ({
  stackView : {
    title: '',
    headerTitleAlign:'centers',
    headerStyle:{
      height: 0,
      backgroundColor: '#f7f0d7'
    },
    headerTintColor: '#fff',
  },
});

export default App;