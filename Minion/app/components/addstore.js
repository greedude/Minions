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


export default class AddStore extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<View>
  		<View style={{height:55, backgroundColor:'#dec373', flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
  		<TouchableOpacity onPress = {() => this.props.navigator.pop()}>
      	<Icon name="navigate-before" color="#fff" size={30} />
      	</TouchableOpacity>
      	<Text style={{color:'#fff', fontWeight:'600'}}>add store</Text>
      	<Text/>
      	</View>
  		<Image source={require('../images/waterBack.jpg')} />
  		</View>
  		)
  }
}
