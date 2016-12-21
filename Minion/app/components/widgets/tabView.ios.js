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


export default class TabView extends Component {
  constructor(props){
    super(props)
 
  }

  
  render(){
    return(
    
    <View style={{backgroundColor:'#303030', height:50, alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'me'})}>
      <View style={{alignItems:'center'}}>
      <Icon name='home' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600',fontSize:10}}>Home</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'minion'})}>
      <View style={{alignItems:'center'}} >
      <Icon name='adb' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:10}}>MINION</Text>
      </View
      ></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'store'})}>
      <View style={{alignItems:'center'}}>
      <Icon name='store' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:10}}>STORE</Text>
      </View></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'items'})}>
      <View style={{alignItems:'center'}}>
      <Icon name='card-giftcard' size={20} color="#fff" style={{margin:5}} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:10}}>ITEMS</Text>
      </View></TouchableOpacity>
      </View>
      
      )
  }
}
