import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View,
  ListView,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
""
var data = []
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class EachStore extends Component {
  constructor(props){
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

fetch_trans() {
    return fetch('http://192.168.1.100:3000/get')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState( {dataSource: ds.cloneWithRows(responseJson.transactions)});
        return responseJson.transactions;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  eachTrans(x){
    return(
     
      <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#d3d3d3'}}>
      <View style={{alignItems:'center', justifyContent:'center', margin:15}}>
      <Icon name="shopping-basket" color="#757575" size={30} />
      <View style={{flexDirection:'row', margin:5, alignItems:'center'}}>
            <Image source ={require('../images/currency.png')} resizeMode="contain" style={{height:10, width:10, margin:5}} />
            <Text style={{color:'#888'}}>{x.amount}</Text>
      </View>
      </View>
      <View style={{justifyContent:'center', width:280, margin:10}}>
      <Text style={{fontWeight:'600', fontSize:13, color:'#666', marginBottom:7}}>{x.name}</Text>
      <Text style={{fontSize:12, color:'#777', fontWeight:'500', marginBottom:5, lineHeight:20}}>{x.date}</Text>
      </View>
      </View>
      
      )
  }
  componentWillMount(){
    this.fetch_trans();
  }

    render(){
    
  	return(
  		<View>
  		<View style={{height:55, backgroundColor:'#dec373', flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
  		<TouchableOpacity onPress = {() => this.props.navigator.pop()}>
      	<Icon name="navigate-before" color="#fff" size={30} />
      	</TouchableOpacity>
      	<Text style={{color:'#fff', fontWeight:'600'}}>{this.props.name}</Text>
      	<TouchableOpacity onPress = {this.fetch_trans.bind(this)}>
        <Icon name='autorenew' size={30} color="#fff" style={{margin:10}} />
        </TouchableOpacity>
      	</View>
  		
      <ListView style={{flex:1, height:500}} 
      contentContainerStyle ={{marginBottom:5}}
      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.eachTrans(rowData)}
      enableEmptySections={true}
      />
      
  		</View>
  		)
  }
}
