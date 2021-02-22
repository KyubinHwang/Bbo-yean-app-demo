import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View,Text,StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';

class Skin extends Component {
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
    Sleeping_Hours: "",
    Wash_Temperature: "",
    Wash_Num: "",
    Stress: "", 
    Collyrium: "",
    Food: ""
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
        return(
            <View style = {styles.mainView}>
                <View  style = {styles.subView}>
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
                            style = {{bottom: "58.2%", left : "66.1%"}} >
                            {this.SkinList_3()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(4)}
                            style = {{bottom: "50%"}} >
                            {this.SkinList_4()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(5)}
                            style = {{bottom: "61.02%", left : "17.6%"}} >
                            {this.SkinList_5()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(6)} 
                            style = {{bottom: "72.2%", left : "35.2%"}}>
                            {this.SkinList_6()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(7)}
                            style = {{bottom: "83.3%", left : "52.8%"}} >
                            {this.SkinList_7()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {()=>this.List(8)}
                            style = {{bottom: "94.4%", left : "70.4%"}} >
                            {this.SkinList_8()}
                        </TouchableOpacity>
                </View>
             <View style = {styles.CharacteristicView}> 
                <View style = {{flexDirection: 'row',}}>
                    <View>
                        <Text style = {{paddingTop: '3%', paddingLeft : '2%',paddingBottom: '3.4%'}}> ● 개인 특성</Text>
                        <Text style = {styles.CharacteristicText}> Q. 수면 시간  </Text>
                        <Text style = {styles.CharacteristicText}> Q. 세안 온도 (차가운,약간 찬,미온,뜨거운)</Text>
                        <Text style = {styles.CharacteristicText}> Q. 세안 횟수 (일)</Text>
                        <Text style = {styles.CharacteristicText}> Q. 스트레스 (1~5) </Text>
                        <Text style = {styles.CharacteristicText}> Q. 세안제 종류(폼,오일,밀크,로션,워터,티슈)</Text>
                        <Text style = {styles.CharacteristicText}> Q. 음식(일일 인스턴트 섭취 횟수)</Text> 
                    </View>
                    <View style = {styles.InputView}>
                        <TextInput value = {this.state.Sleeping_Hours}
                            style = {styles.Input}
                            onChangeText={this.onChangeSleeping_Hours}
                            maxLength = {10}
                        >
                        </TextInput>
                        <TextInput value = {this.state.Wash_Temperature}
                            style = {styles.Input}
                            onChangeText={this.onChangeWash_Temperature}
                            maxLength = {10}
                        >
                        </TextInput>
                        <TextInput value = {this.state.Wash_Num}
                            style = {styles.Input}
                            onChangeText={this.onChangeWash_Num}
                            maxLength = {10}
                        >
                        </TextInput>
                        <TextInput value = {this.state.Stress}
                            style = {styles.Input}
                            onChangeText={this.onChangeStress}
                            maxLength = {10}
                        >
                        </TextInput>
                        <TextInput value = {this.state.Collyrium}
                            style = {styles.Input}
                            onChangeText={this.onChangeCollyrium}
                            maxLength = {10}
                        >
                        </TextInput>
                        <TextInput value = {this.state.Food}
                            style = {styles.Input}
                            onChangeText={this.onChangeFood}
                            maxLength = {10}
                        >
                        </TextInput>
                    </View>
                        
                </View>
                <TouchableOpacity
                        style = {styles.submit}
                        onPress = {()=>{
                            this.props.navigation.navigate('Login')
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
                             axios.post('http://192.168.35.7:8080/members/personal/1',{
                                  sleeping_Hours: this.state.Sleeping_Hours,
                                  wash_Temperature: this.state.Wash_Temperature,
                                  wash_Num: this.state.Wash_Num,
                                  stress: this.state.Stress,
                                  collyrium: this.state.Collyrium,
                                  food: this.state.Food,
                              }).then(response => {
                                  console.log(response.data);
                              }).catch(error => {
                                  console.log(error);
                              })
                        }}
                    >
                        <Text>다음</Text>
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
        width:'100%',
    },
    subView: {
        paddingTop: 20,
        width:'100%',
        left: '6%',
        top: '20%',
    },
    TrueTextView_1 : {
        borderWidth: 0.5,
        width:"22%",
        fontSize : 13,
        color: "black",
        padding : 15,
        backgroundColor : "#f5eccb",
    },
    FlaseTextbiew_1:{
        borderWidth: 0.5,
        width:"22%",
        fontSize : 13,
        color: "black",
        padding : 15,
    },
    TrueTextView_2 : {
        borderWidth: 0.5,
        width:"17.6%",
        fontSize : 13,
        color: "black",
        padding : 15,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor : "#f5eccb",

    },
    FlaseTextbiew_2:{
        borderWidth: 0.5,
        width:"17.6%",
        fontSize : 13,
        color: "black",
        padding : 15,
        paddingLeft: 8,
        paddingRight: 8

    },
    CharacteristicView:{
        borderWidth: 1,
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
        marginTop: 10,
        width: '50%',
        backgroundColor: '#f5eccb',
        borderColor:'black',
        left: 100,
        borderWidth: 0.5,
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

export default Skin;