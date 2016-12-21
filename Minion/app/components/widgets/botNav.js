import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  Dimensions,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';

var opacity = [1,1,1,1]

export default class BotNav extends Component {
  constructor(props){
    super(props)
 
  }
  highlight(){
    opacity = [0.6,0.6,0.6,0.6];
    switch(this.props.page){
      case 'me':
        opacity[0] = 1;
        break;
      case 'minion':
      opacity[1] = 1;
      break;

      case 'store':
      opacity[2] = 1;
      break;

      case 'items':
      opacity[3] = 1;
      break;

      default:

    }

  }
  render(){
    this.highlight();
  	return(
  	
    <View style={{backgroundColor:'#303030', height:50, alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'me'})}>
      <View style={{alignItems:'center', opacity:opacity[0]}}>
      <Icon name='home' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600',fontSize:10}}>Home</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'minion'})}>
      <View style={{alignItems:'center', opacity:opacity[1]}} >
      <Icon name='adb' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:10}}>MINION</Text>
      </View
      ></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'store'})}>
      <View style={{alignItems:'center', opacity:opacity[2]}}>
      <Icon name='store' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:10}}>STORE</Text>
      </View></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'items'})}>
      <View style={{alignItems:'center', opacity:opacity[3]}}>
      <Icon name='card-giftcard' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:10}}>ITEMS</Text>
      </View></TouchableOpacity>
      </View>
      
  		)
  }
}
