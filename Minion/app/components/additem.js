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


const {addCoin} = require('../actions/actions');
const {connect} = require('react-redux');
export default class AddItem extends Component {
  props:{
    minion: any
  }
  state:{
    minion: any
  }
  constructor(props){
    super(props)

    this.state = {
      coin: this.props.minion.coin
    }
 
  }

    componentWillReceiveProps(nextProps) {
    if (this.props.minion.coin !== nextProps.minion.coin){
      this.setState({coin: nextProps.minion.coin});
    };

    
  }

  gainCoin() {
    this.props.dispatch(addCoin(this.state.coin));

  }
  render(){
  	return(
  		<View>
  		<View style={{height:55, backgroundColor:'#dec373', flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
  		<TouchableOpacity onPress = {() => this.props.navigator.pop()}>
      	<Icon name="navigate-before" color="#fff" size={30} />
      	</TouchableOpacity>
      	<Text style={{color:'#fff', fontWeight:'600'}}>Add Coin</Text>
      	<TouchableOpacity onPress={this.gainCoin.bind(this)} >
      <Icon name="add" color="#fff" size={30} />
      </TouchableOpacity>
      	</View>
  		<Image source={require('../images/waterBack.jpg')} />
  		</View>
  		)
  }
}
function select(state){
  return{
    minion: state.minion,
  }
}

module.exports = connect(select)(AddItem);
