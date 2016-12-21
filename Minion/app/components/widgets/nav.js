import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Nav extends Component {
  constructor(props){
    super(props)
  
    this.state ={
      showNav: false
    }
  }

  showNav(){
    if(this.state.showNav){
    return(<View style={{backgroundColor:'#7473de', height:50, alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'me'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12, padding:5}}>ME</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'minion'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12,padding:5}}>MINION</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'store'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12, padding:5}}>STORE</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'items'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12, padding:5}}>ITEMS</Text></TouchableOpacity>
      </View>)}
  }

  navLogic(){
    if(this.state.showNav){
      this.setState({
        showNav: false
      })
    } else{
      this.setState({
        showNav: true
      })
    }
  }

  render(){
  	return(
      <View>
  		<View style={{height:55, backgroundColor:'#7473de', alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity>
      <Icon name="clear-all" size={30} color="#fff" style={{margin:10}} />
      </TouchableOpacity>
      <Text style={{color:'#fff', fontWeight:'600'}}>{this.props.name}</Text>
      <TouchableOpacity onPress ={() => this.props.navigator.push({id:this.props.next})}>
      <Icon name={this.props.icon} size={30} color="#fff" style={{margin:10}} />
  		</TouchableOpacity>
      </View>
 
      </View>
  		)
  }
}
