import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

class SkinChange extends Component {
state = {
    list: '',
    blackhead: false,
    oily: false,
    keratin: false,
    pimple: false,
    dry: false,
    glow: false,
    flexibility: false,
    skintone: false,
    wrinkle: false,
} 

List = (idx) => {
    if(idx == 0 ){
   this.state.blackhead ?
        this.setState({
            blackhead : false
        })
      :   
        this.setState({
            blackhead :true
        })
    }
    else if (idx ==1){
       this.state.oily ?
        this.setState({
            oily : false
          })
         :   
        this.setState({
            oily :true
         })
    }
    else if (idx ==2){
        this.state.keratin ?
         this.setState({
            keratin : false
           })
          :   
         this.setState({
            keratin :true
          })
     }
     else if (idx ==3){
        this.state.pimple ?
         this.setState({
            pimple : false
           })
          :   
         this.setState({
            pimple :true
          })
     }
     else if (idx ==4){
        this.state.dry ?
         this.setState({
            dry : false
           })
          :   
         this.setState({
            dry :true
          })
     }
     else if (idx ==5){
        this.state.glow ?
         this.setState({
            glow : false
           })
          :   
         this.setState({
            glow :true
          })
     }
     else if (idx ==6){
        this.state.flexibility ?
         this.setState({
            flexibility : false
           })
          :   
         this.setState({
            flexibility :true
          })
     }
     else if (idx ==7){
        this.state.skintone ?
         this.setState({
            skintone : false
           })
          :   
         this.setState({
            skintone :true
          })
     }
     else{
        this.state.wrinkle ?
         this.setState({
            wrinkle : false
           })
          :   
         this.setState({
            wrinkle :true
          })
     }
    }

    SkinList_0 = () => (
        this.state.blackhead ?
        <Text style = {styles.TrueTextView_1}> 블랙헤드 </Text> 
        :
        <Text style = {styles.FlaseTextbiew_1}> 블랙헤드 </Text>
    )
    SkinList_1 = () => (
        this.state.oily ?
        <Text style = {styles.TrueTextView_1}>   기름짐  </Text> 
        :
        <Text style = {styles.FlaseTextbiew_1}>   기름짐  </Text>
    )
    SkinList_2 = () => (
        this.state.keratin ?
        <Text style = {styles.TrueTextView_1}> 각질,모공  </Text> 
        :
        <Text style = {styles.FlaseTextbiew_1}> 각질,모공  </Text>
    )
    SkinList_3 = () => (
        this.state.pimple ?
        <Text style = {styles.TrueTextView_1}>  여드름  </Text> 
        :
        <Text style = {styles.FlaseTextbiew_1}>  여드름  </Text>
    )
    SkinList_4 = () => (
        this.state.dry ?
        <Text style = {styles.TrueTextView_2}>건조,당김</Text> 
        :
        <Text style = {styles.FlaseTextbiew_2}>건조,당김</Text>
    )
    SkinList_5 = () => (
        this.state.glow ?
        <Text style = {styles.TrueTextView_2}>    홍조 </Text> 
        :
        <Text style = {styles.FlaseTextbiew_2}>    홍조 </Text>
    )
    SkinList_6 = () => (
        this.state.flexibility ?
        <Text style = {styles.TrueTextView_2}>처짐,탄력 </Text> 
        :
        <Text style = {styles.FlaseTextbiew_2}>처짐,탄력 </Text>
    )
    SkinList_7 = () => (
        this.state.skintone ?
        <Text style = {styles.TrueTextView_2}>  피부톤 </Text> 
        :
        <Text style = {styles.FlaseTextbiew_2}>  피부톤 </Text>
    )
        SkinList_8 = () => (
        this.state.wrinkle ?
        <Text style = {styles.TrueTextView_2}>    주름</Text> 
        :
        <Text style = {styles.FlaseTextbiew_2}>    주름</Text>
    )
    render(){
        return(
            <View style = {styles.mainView}>
            <Text style = {{textAlign : 'center', fontSize: 18, marginTop : 40, color : '#a1740d'}}>적용시키고 싶은 피부고민 버튼을 눌러주세요!</Text>
                <View style = {styles.subView}>

                        <TouchableOpacity
                            onPress = {()=>this.List(0)}
                            style = {{bottom: "25%"}}
                        >
                            {this.SkinList_0()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(1)} 
                            style = {{bottom: "36.05%", left : "22%"}}>
                            {this.SkinList_1()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(2)}
                            style = {{bottom: "47.2%", left : "44%"}} >
                            {this.SkinList_2()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(3)}
                            style = {{bottom: "58.3%", left : "66%"}} >
                            {this.SkinList_3()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(4)}
                            style = {{bottom: "49.9%"}} >
                            {this.SkinList_4()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(5)}
                            style = {{bottom: "61.02%", left : "17.6%"}} >
                            {this.SkinList_5()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(6)} 
                            style = {{bottom: "72.1%", left : "35.2%"}}>
                            {this.SkinList_6()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(7)}
                            style = {{bottom: "83.23%", left : "52.8%"}} >
                            {this.SkinList_7()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(8)}
                            style = {{bottom: "94.4%", left : "70.4%"}} >
                            {this.SkinList_8()}
                        </TouchableOpacity>
                </View>
                <TouchableOpacity
                        style = {styles.submit}
                        onPress = {()=>{
                            this.props.navigation.navigate('정보')
                             axios.post('http://192.168.35.7:8080/members/skinTrouble/1',{
                                 blackhead: this.state.blackhead,
                                 oily: this.state.oily,
                                 keratin: this.state.keratin,
                                 pimple: this.state.pimple,
                                 dry: this.state.dry,
                                 glow: this.state.glow,
                                 flexibility: this.state.flexibility,
                                 skintone: this.state.skintone,
                                 wrinkle: this.state.wrinkle,
                             }).then(response => {
                                 console.log(response.data);
                             }).catch(error => {
                                 console.log(error);
                             })
                        }}
                    >
                        <Text>제출</Text>
                </TouchableOpacity>
            </View>
        )
    } 
}

 const styles= StyleSheet.create({
    mainView: {
        backgroundColor : '#f7f0d7',
        flex: 1,
        width:'100%',
    },
    subView: {
        paddingTop: 20,
        width:'100%',
        left: '6%',
        top: '20%',
    },
    TrueTextView_1 : {
        borderWidth: 1,
        borderColor : '#a1740d',
        width : '22%',
        fontSize : 13,
        color: "black",
        padding : 15,
        backgroundColor : "#f5eccb",
    },
    FlaseTextbiew_1:{
        borderWidth: 1,
        borderColor : '#a1740d',
        width : '22%',
        fontSize : 13,
        color: "black",
        padding : 15,
    },
    TrueTextView_2 : {
        borderWidth: 1,
        borderColor : '#a1740d',
        width:"17.6%",
        fontSize : 13,
        color: "black",
        padding : 15,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor : "#f5eccb",

    },
    FlaseTextbiew_2:{
        borderWidth: 1,
        borderColor : '#a1740d',
        width:"17.6%",
        fontSize : 13,
        color: "black",
        padding : 15,
        paddingLeft: 8,
        paddingRight: 8

    },
    CharacteristicView:{
        borderWidth: 1,
        borderColor : '#a1740d',
        borderColor:'#dea112',  
        width: '90%',
        marginLeft: '5%',
        bottom: '30%'
    },
    CharacteristicText:{
        paddingTop: 5,
        paddingBottom: 14,
        paddingLeft: '3%' ,
        fontSize: 14
    },
    submit:{
        bottom : '37%',
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        left: 100,
        borderWidth: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Input : {
        borderWidth: 0.7,
        borderColor: "#dea112",
        width: 70, height : 35,
        top: 175,
        marginLeft: 15,
        marginTop:4,
        fontSize: 12.5,
    },
    InputView: {
        bottom : '40%',
    }
})  

export default SkinChange;