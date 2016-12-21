import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ScrollView,
  View,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

var imgMinion = require('../images/minion.png');
var gifPlay = require('../images/play.gif');
const {feedMinion} = require('../actions/actions');
const {playMinion} = require('../actions/actions');
const {connect} = require('react-redux');


class EachMinion extends Component {
  props:{
    minion: any
  }
  state:{
    minion: any
  }
  constructor(props){
    super(props);
    this.state = {
      health: this.props.minion.health,
      mood: this.props.minion.mood,
      modalVisible: false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.minion.health !== nextProps.minion.health){
      this.setState({health: nextProps.minion.health});
    };
    if (this.props.mood !== nextProps.minion.mood){
      this.setState({mood: nextProps.minion.mood});
    }
    
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
  	return(
  		<Image source={require('../images/waterBack.jpg')} style={{flex:1, width:null, height:null}}>
      <View style={{height:55, flexDirection:'row', justifyContent:'space-between', backgroundColor:"rgba(0,0,0,0.3)", alignItems:'center'}}>
      <TouchableOpacity onPress = {() => this.props.navigator.pop()}>
      <Icon name="navigate-before" color="#fff" size={30} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress ={() => this.props.navigator.push({id:'share'})}>
      <Icon name="share" size={30} color="#fff" style={{margin:10}} />
      </TouchableOpacity>
      </View>
      <View style={{flex:1, justifyContent:'flex-end'}}>
      <Image source ={imgMinion} resizeMode="contain" style={{width:150, height: 170, alignSelf:'center',marginBottom:0}} />
      </View>
  		<View style={{flex:2, backgroundColor:'rgba(255,255,255,0.9)'}}>
      
      <View style={{flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:14, color:'#a6a6a6'}}>#{this.props.minion.number}  </Text>
      <Text style={{fontWeight:"600", color:'#777'}}>{this.props.minion.name}</Text>
      </View>
      <View style={styles.rectanglebit}>
      <View style={styles.columnbit}>
      <Text style={styles.title}>
      Type
      </Text>
      <Text style={styles.val}>
      {this.props.minion.type}
      </Text>
      </View>
       <View style={styles.columnbit}>
      <Text style={styles.title}>
      Mood
      </Text>
      <Text style={styles.val}>
      {this.state.mood}
      </Text>
      </View>
       <View style={styles.columnbit}>
      <Text style={styles.title}>
      Health
      </Text>
      <Text style={styles.val}>
      {this.state.health}
      </Text>
      </View>
      </View>
      <ScrollView contentContainerStyle={{margin:20, marginTop:5}}>
      <Text style={{color:'#999',lineHeight:22, fontWeight:'500', fontSize:14}}>
      Born at {this.props.minion.dob}
      </Text>
      </ScrollView>

      <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}

          onRequestClose={() => {alert("Modal has been closed.")}}
          style={{justifyContent:'center'}}
          >
         <View style={{marginTop: 100}}>
          <View style={{ justifyContent:'space-between', alignItems:'center'}}>
          <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Image source={gifPlay} style={{width: 300, height: 300}}/>
            </TouchableOpacity>

            
          </View>
         </View>
        </Modal>


      <View style={{flexDirection:'row', height:50,flex:2, justifyContent:'space-around', alignItems:'center',height:10, padding:15}}>
      <TouchableOpacity onPress={this.feed.bind(this)}>
      <View style={{height:40, borderRadius:5, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e7e7e7'}}>
      <Text style={{fontSize:11, color:'#666', fontWeight:'600'}}>Feed</Text>
      </View>
      </TouchableOpacity>
      
       <TouchableOpacity onPress={this.play.bind(this)}>
       <View style={{height:40, borderRadius:5, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#e7e7e7'}}>
      <Text style={{fontSize:11, color:'#666', fontWeight:'600'}}>Play</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>

  		</Image>
  		)
  }

  feed() {
    this.props.dispatch(feedMinion(this.state.health));
    gifPlay = require('../images/feed.gif');

    this.setModalVisible(true);

  }

  play() {
    this.props.dispatch(playMinion(this.state.mood));
    gifPlay = require('../images/play.gif');

    this.setModalVisible(true);


  }
}


const styles = StyleSheet.create({
  rectanglebit:{height:56, borderWidth:2, flexDirection:'row', borderColor:'#e3e3e3', margin:20},
  columnbit:{flex:1, alignItems:'center', justifyContent:'space-around'},
  title:{ color:"#666", fontWeight:'600'},
  val:{ color:"#999"},
 
});
function select(state){
  return{
    minion: state.minion,
  }
}

module.exports = connect(select)(EachMinion);
