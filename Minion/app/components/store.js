import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ScrollView,
  ListView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from './widgets/nav'
import Footer from "./widgets/botNav"
import ItemsNav from './widgets/itemsNav'

var mcdonald = require('../images/mcdonald.jpeg')
var starbucks = require('../images/starbucks.png')
var oreo = require('../images/oreo.jpeg')
var universal = require('../images/universal.jpeg')

var pokeball = require('../images/pokeball.png')
var greatball = require('../images/greatball.png')
var loveball = require('../images/loveball.png')
var ultraball = require('../images/ultraball.png')
var timerball = require('../images/timerball.png')
var diveball = require('../images/diveball.png')
var sportball = require('../images/sportball.png')
var safariball = require('../images/safariball.png')
var quickball = require('../images/quickball.png')

var trainer = {
  credits:950,
  items:{
    pokeballs:10,
    greatballs:5,
    ultraballs:0
  }
}

var items = [{
  name: "McDonald's",
  cost:10,
  image: mcdonald,
  desc: "McDonald's is the world's largest chain of hamburger fast food restaurants. "
},{
  name: "Starbucks",
  cost:40,
  image: starbucks,
  desc: "Starbucks Corporation is an American coffee company and coffeehouse chain.."
},
{
  name: "Oreo",
  cost:30,
  image: oreo,
  desc: "Milk's Favorite Cookie."
},
{
  name: "Universal Studios",
  cost:30,
  image: universal,
  desc: "Universal Studios includes a full-day, movie-based theme park and Studio Tour plus Universal CityWalk."
},
{
  name: "Oreo",
  cost:30,
  image: oreo,
  desc: "Milk's Favorite Cookie."
},
{
  name: "Oreo",
  cost:30,
  image: oreo,
  desc: "Milk's Favorite Cookie."
},
{
  name: "Oreo",
  cost:30,
  image: oreo,
  desc: "Milk's Favorite Cookie."
},
{
  name: "Oreo",
  cost:30,
  image: oreo,
  desc: "Milk's Favorite Cookie."
},
]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Store extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(items)
    }
 
  }

  eachItem(x){
    return(
      <TouchableOpacity onPress={() => this.props.navigator.push({id: 'eachStore', name:x.name})}>
      <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#d3d3d3'}}>
      <View style={{alignItems:'center', justifyContent:'center', margin:15}}>
      <Image source={x.image} resizeMode='contain' style={{width:40, height:40}} />
      <View style={{flexDirection:'row', margin:5, alignItems:'center'}}>
            <Image source ={require('../images/currency.png')} resizeMode="contain" style={{height:10, width:10, margin:5}} />
            <Text style={{color:'#888'}}>{x.cost}</Text>
      </View>
      </View>
      <View style={{justifyContent:'center', width:280, margin:10}}>
      <Text style={{fontWeight:'600', fontSize:13, color:'#666', marginBottom:7}}>{x.name}</Text>
      <Text style={{fontSize:12, color:'#777', fontWeight:'500', marginBottom:5, lineHeight:20}}>{x.desc}</Text>
      </View>
      </View>
      </TouchableOpacity>
      )
  }
  render(){
  	return(
  		<View style={{backgroundColor:'#f7f7f7', flex:1}}>
  		<Nav name="STORE" icon="add" next='addstore' {...this.props} />
      <ItemsNav />
      <ScrollView
      style = {{marginBottom:30}}
      >
      <ListView style={{flex:13,}} 
      scrollEnabled={false}
        contentContainerStyle ={{marginBottom:5}}

      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.eachItem(rowData)}
      />
      </ScrollView>

      <Footer {...this.props} page='store'/>
  		</View>)
  }





}
