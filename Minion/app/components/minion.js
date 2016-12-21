import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ListView,
  View
} from 'react-native';

import Nav from "./widgets/nav"
import MinionNav from "./widgets/minionNav"
import Footer from "./widgets/botNav"


var minion = require('../images/minion.png');

var currentMinion = [
{
  name:"Alexander",
  image: minion,
  selected: false,
  number: "001",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:12
},
{ 
  name:'Benjamin',
  image: minion,
  selected: false,
  number: "002",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:10
},
{
  name: "Christopher",
  image: minion,
  selected: false,
  number: "003",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:90
},
{
  name:'Daniel',
  image: minion,
  selected: false,
  number: "004",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:80
},
{
  name: "Ethan",
  image: minion,
  selected: false,
  number: "005",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:70
},
{
  name:"Fernando",
  image: minion,
  selected: false,
  number: "006",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:60
},
{
  name: "Gabriel",
  image: minion,
  selected: false,
  number: "007",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:50
},
{
  name: "Henry",
  image: minion,
  selected: false,
  number: "008",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:40
},
{
  name: "Issac",
  image: minion,
  selected: false,
  number: "009",
  type: "Water",
  dob: '01/01/2000',
  mood: 3,
  state: 1,
  health:30
}
]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Minion extends Component {
  constructor(props){
    super(props)
    
     this.state = {
      dataSource: ds.cloneWithRows(currentMinion)
    }
  }

  eachRow(val){
      var health = val.health;
      var healthColor


      //custom health colors
      if (health < 20){
        healthColor = "#f96062"
      }else if(health > 19 && health < 40){
        healthColor = "#fbd34e"
      } else{
        healthColor = "#b7eb9b"
      }

    return(
      <TouchableOpacity onPress={() => this.props.navigator.push({id: 'eachMinion', minion:val})}>
      <View style={{height:120, margin:10}}>
      <Image source ={val.image} style={{height:80, width:80, margin:10}} resizeMode ="contain" />
      <View style={{alignItems:'center'}}><Text style={{fontSize:11, color:'#777', fontWeight:'bold'}}>{val.name}</Text></View>
      <View style={{flexDirection:'row', justifyContent:'space-around', borderBottomWidth:1, borderColor:'#e3e3e3', padding:5}}>
      <Text style={{fontSize:9, color:'#777'}}>Health</Text>
      <Text style={{fontSize:9, color:'#777'}}>{health}</Text>
      </View>
      <View style={{height:5, width:90, borderColor:'#c7c7c7', margin:3, borderWidth:1, borderRadius:5}}>
      <View style={{height:4, width:health, backgroundColor:healthColor, borderRadius:5}} />
      </View>
      </View>
      </ TouchableOpacity>
      )
  }

  render(){
  	return(
  		<View style = {{flex:1, backgroundColor:'#f7f7f7'}}>
  		<Nav name ="MINION" icon="add" next='birth' {...this.props} />
        <ListView 
      dataSource = {this.state.dataSource}
      style = {{height:390}}
      contentContainerStyle ={{justifyContent: 'space-around', alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap'}}
      renderRow = {(rowData) => this.eachRow(rowData)}/>
      
      <Footer {...this.props} page='minion'/>
  		</View>
  		)
  }
}


