import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ScrollView,
  ListView,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from './widgets/nav'
import ItemsNav from './widgets/itemsNav'
import Footer from "./widgets/botNav"

var pokeball = require('../images/pokeball.png')
var greatball = require('../images/greatball.png')
var loveball = require('../images/loveball.png')
var ultraball = require('../images/ultraball.png')
var timerball = require('../images/timerball.png')
var diveball = require('../images/diveball.png')
var sportball = require('../images/sportball.png')
var safariball = require('../images/safariball.png')
var quickball = require('../images/quickball.png')

var coin = require('../images/currency.png')
const {addCoin} = require('../actions/actions');

var trainer = {
  credits:950,
  items:{
    pokeballs:10,
    greatballs:5,
    ultraballs:0
  }
}

var items = [{
  name: "coin",
  cost:10,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},{
  name: "coin",
  cost:10,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},
{
  name: "coin",
  cost:2,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},
{
  name: "coin",
  cost:3,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},
{
  name: "coin",
  cost:3,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},
{
  name: "coin",
  cost:3,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},
{
  name: "coin",
  cost:5,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},
{
  name: "coin",
  cost:5,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
},
{
  name: "coin",
  cost:8,
  image: coin,
  desc: "A coin is a small, flat, round piece of metal or plastic used primarily as a medium of exchange or legal tender. They are standardized in weight, and produced in large quantities at a mint in order to facilitate trade. They are most often issued by a government."
}]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const {connect} = require('react-redux');

export default class Items extends Component {
  props:{
    minion: any
  }
  state:{
    minion: any
  }
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(items),
      coin: this.props.minion.coin
    }
 
  }

    componentWillReceiveProps(nextProps) {
    if (this.props.minion.coin !== nextProps.minion.coin){
      this.setState({coin: nextProps.minion.coin});
    };

    
  }

  eachItem(x){
    return(
      

      <TouchableOpacity>
      <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#d3d3d3'}}>
      <View style={{alignItems:'center', justifyContent:'center', margin:15}}>
      <Image source={x.image} resizeMode='contain' style={{width:40, height:40}} />
      <View style={{flexDirection:'row', margin:5, alignItems:'center'}}>
            <Text style={{color:'#888', fontWeight:'600', fontSize:11}}>x {this.state.coin}</Text>
      </View>
      </View>
      <View style={{justifyContent:'center', width:280, margin:10}}>
      <Text style={{fontWeight:'700', fontSize:13, color:'#666', marginBottom:0}}>{x.name}</Text>
      <Text style={{fontSize:12, color:'#777', fontWeight:'500', marginBottom:5, lineHeight:20}}>{x.desc}</Text>
      <TouchableOpacity onPress={this.gainCoin.bind(this)} >
      <Icon name="add" color="#000000" size={30} />
      </TouchableOpacity>
      </View>
      </View>
      </TouchableOpacity>
      )
  }

  gainCoin() {
    this.props.dispatch(addCoin(this.state.coin));

  }
  render(){
    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
    </View>
  );

  	return(
      

  		<View style={{backgroundColor:'#f7f7f7', flex:1}}>
  		<Nav name="ITEMS" icon="autorenew"  {...this.props} />
      
      <View style={{backgroundColor:'#f7f7f7', flex:1}}>
      <TouchableOpacity>
      <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#d3d3d3'}}>
      <View style={{alignItems:'center', justifyContent:'center', margin:15}}>
      <Image source={require('../images/currency.png')} resizeMode='contain' style={{width:40, height:40}} />
      <View style={{flexDirection:'row', margin:5, alignItems:'center'}}>
            <Text style={{color:'#888', fontWeight:'600', fontSize:11}}>x {this.state.coin}</Text>
      </View>
      </View>
      <View style={{justifyContent:'center', width:280, margin:10}}>
      <Text style={{fontWeight:'700', fontSize:13, color:'#666', marginBottom:0}}>coin</Text>
      <Text style={{fontSize:12, color:'#777', fontWeight:'500', marginBottom:5, lineHeight:20}}>It is your coin</Text>
      <TouchableOpacity onPress={this.gainCoin.bind(this)} >
      <Icon name="add" color="#000000" size={30} />
      </TouchableOpacity>
      </View>
      </View>
      </TouchableOpacity>

      </View>

      <Footer {...this.props} page='items'/>
  		</View>
      )
  }





}
function select(state){
  return{
    minion: state.minion,
  }
}

module.exports = connect(select)(Items);
