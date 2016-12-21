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

var burb = require('../images/001.png');
var alakazam = require('../images/Alakazam.png');
var mewtwo = require('../images/mewtwo.png');

var minion = require('../images/minion.png');
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from './widgets/nav'
import Footer from "./widgets/botNav"
import ItemsNav from './widgets/itemsNav'
import TabView from './widgets/tabView'

const {connect} = require('react-redux');
var currentPokemon = [
{
  name:"Blair",
  image: minion,
  selected: false
},
{ 
  name:'Azir',
  image: minion,
  selected: false
},
{
  name: "Morde",
  image: minion,
  selected: false
},
]


var badge1 = require('../images/badge1U.png')
var badge2 = require('../images/badge2U.png')
var badge3 = require('../images/badge3U.png')
var badge4 = require('../images/badge4U.png')
var badge5 = require('../images/badge5A.png')
var badge6 = require('../images/badge6U.png')
var badge7 = require('../images/badge7U.png')
var badge8 = require('../images/badge8U.png')

var minion = require('../images/minion.png');

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class Me extends Component {
   props:{
    minion: any
  }
  state:{
    minion: any
  }
  constructor(props){
    super(props)

    this.state = {
      level: 24,
      dataSource: ds.cloneWithRows(currentPokemon),
      coin: this.props.minion.coin

    }
 
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.minion.coin !== nextProps.minion.coin){
      this.setState({coin: nextProps.minion.coin});
    };

    
  }

  eachRow(val){
      var health = Math.floor((Math.random() * 90) + 1);


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
  		<View style={{flex:1, backgroundColor:'#e8e8e8'}}>
      <Nav name="C0re Dump" icon="add" next='birth' {...this.props} />
      <View style={{flex:1}}>
      <View style={{flex:3, backgroundColor:'#de9a73', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
      <View style={{}}>
      <Image source = {require('../images/usc_logo.png')} resizeMode="contain" style={{height:30, width:30, margin:10, }} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>
      Team USC
      </Text>
      </View>
      <Image source = {require('../images/usc.png')} resizeMode="contain" style={{height:140, width:140}} />
      <View style={{flexDirection:'row', borderBottomWidth:2, borderColor:'#fff', borderRadius:5}}>
      <Text style={{color:'#fff', fontWeight:"700", fontSize:12, margin:8}}>
      LV    
      </Text>
      <Text style={{color:'#fff', fontWeight:"700", fontSize:21, margin:5}}>
      {this.state.level}
      </Text>
      </View>
      </View>
      <View style={{ backgroundColor:'#fff', marginTop:10}}>
      <View style={{flexDirection:'row',padding:5, margin:10}}>
      <Image source ={require('../images/currency.png')} resizeMode="contain" style={{height:20, width:20, marginLeft:15}} />
      <Text style={{color:'#888', fontWeight:'600', fontSize:16}}> x {this.state.coin}</Text>
      </View>
      <ListView 
      dataSource = {this.state.dataSource}
      style = {{height:180}}
      contentContainerStyle ={{justifyContent: 'space-around', alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap'}}
      renderRow = {(rowData) => this.eachRow(rowData)}/>
      </View>
      </View>
      <Footer {...this.props} page='me'/>
  
  		</View>
  		)
  }
}
function select(state){
  return{
    minion: state.minion,
  }
}

module.exports = connect(select)(Me);

