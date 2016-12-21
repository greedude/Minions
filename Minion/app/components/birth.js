import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View,
  TextInput,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

var imgMinion = require('../images/minion.png');


export default class Birth extends Component {
  constructor(props){
    super(props)
    this.state = { name:'', type:'',health:'',modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
  	return(
  		<Image source={require('../images/waterBack.jpg')} style={{flex:1, width:null, height:null, }} >
        
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}

          onRequestClose={() => {alert("Modal has been closed.")}}
          style={{justifyContent:'center'}}
          >
         <View style={{marginTop: 100}}>
          <View style={{height:100, justifyContent:'space-between', alignItems:'center'}}>
            <Text>{this.state.name} is born.{"\n"}Its type is {this.state.type}. {"\n"}Its health is {this.state.health}</Text>

            <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
              this.props.navigator.pop();
            }}>
              <View style={{height:20, borderRadius:5, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e7e7e7'}}>
              <Text style={{fontSize:11, color:'#666', fontWeight:'600'}}>Done</Text>
              </View>
            </TouchableOpacity>

          </View>
         </View>
        </Modal>


      <View style={{height:55, backgroundColor:'#dec373', flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
  		<TouchableOpacity onPress = {() => this.props.navigator.pop()}>
      	<Icon name="navigate-before" color="#fff" size={30} />
      	</TouchableOpacity>
      	<Text style={{color:'#fff', fontWeight:'600'}}>New Minion</Text>
      	<TouchableOpacity onPress={() => {this.setModalVisible(true)}}>
        <Icon name="check-circle" color="#fff" size={30} style={{margin:10}}/>
        </TouchableOpacity>
      	</View>
  		
      <View style={{flex:1, backgroundColor:'rgba(255,255,255,0.9)', justifyContent:'center',alignItems:'center'}}>
      <Image source ={imgMinion} resizeMode="contain" style={{width:150, height: 170}} />
      <View style={{alignItems:'center'}}>
        <TextInput style={{height: 40, width: 200,borderColor: 'gray', borderWidth: 0}} onChangeText={(name) => this.setState({name})}
        value={this.state.name} placeholder="Name"/> 
        <TextInput style={{height: 40,  width: 200,borderColor: 'gray', borderWidth: 0}} onChangeText={(type) => this.setState({type})}
        value={this.state.type} placeholder="Type"/> 
        <TextInput style={{height: 40,  width: 200,borderColor: 'gray', borderWidth: 0}} onChangeText={(health) => this.setState({health})}
        value={this.state.health} placeholder="Health" keyboardType="numeric"/> 
      </View>
      </View>
      </Image>
  		
  		)
  }
}
