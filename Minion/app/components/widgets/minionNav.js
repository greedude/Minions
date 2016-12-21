import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MinionNav extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<View style={{height:50,flexDirection:'row', margin:10, alignItems:'center', marginBottom:0, backgroundColor:'#f7f7f7', borderBottomWidth:1, borderColor:'#d3d2d3', justifyContent:'space-around', borderRadius:5}}>
      <TouchableOpacity><Text style={{color:"#7473de", fontWeight:'600', fontSize:12}}>MINION</Text></TouchableOpacity>
      
      </View>
  		)
  }
}
