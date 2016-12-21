import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View,
  BackAndroid,
  DrawerLayoutAndroid
} from 'react-native';

import Login from './login'
import EachStore from './eachstore'
import EachMinion from './eachminion'
import Me from './me'
import Minion from './minion'
import Store from './store'
import Items from './items'
import Birth from './birth'
import AddStore from './addstore'
import AddTransaction from './addtransaction'
import AddItem from './additem'
import Share from './share'
import TabView from './widgets/tabView'
import Icon from 'react-native-vector-icons/MaterialIcons';


BackAndroid.addEventListener('hardwareBackPress', function() {
 if (navigator &&navigator.getCurrentRoutes().length > 1) {
 navigator.pop();
 return true;
 }
 return false;
});


export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
  
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;
    var navigationView = (
    <Image source={require('../images/waterBack.jpg')} style={{flex:1, width:null, height:null, }}>
    <View style={{flex:3,alignItems:'center'}}>
    <Image source={require('../images/avatar.png')} style={{height:80, width:80, marginTop:20}} /><Text>C0re Dump</Text>
    </View>
    <View style={{ flex:10, backgroundColor:"#fff"}}>
    <TouchableOpacity><View style={{flexDirection:'row',alignItems:'center'}}><Icon name='account-circle' size={30} style={{margin:10, marginLeft:20}}/><Text style={{fontSize:16}} >Profile</Text></View></TouchableOpacity>
    <TouchableOpacity><View style={{flexDirection:'row',alignItems:'center'}}><Icon name='people' size={30} style={{margin:10, marginLeft:20}}/><Text style={{fontSize:16}} >Friends</Text></View></TouchableOpacity>
    <TouchableOpacity><View style={{flexDirection:'row',alignItems:'center'}}><Icon name='settings' size={30} style={{margin:10, marginLeft:20}}/><Text style={{fontSize:16}} >Setting</Text></View></TouchableOpacity>
    <TouchableOpacity><View style={{flexDirection:'row',alignItems:'center'}}><Icon name='feedback' size={30} style={{margin:10, marginLeft:20}}/><Text style={{fontSize:16}} >Feedback</Text></View></TouchableOpacity>
    <TouchableOpacity><View style={{flexDirection:'row',alignItems:'center'}}><Icon name='help' size={30} style={{margin:10, marginLeft:20}}/><Text style={{fontSize:16}} >Help</Text></View></TouchableOpacity>
    <TouchableOpacity><View style={{flexDirection:'row',alignItems:'center'}}><Icon name='directions-run' size={30} style={{margin:10, marginLeft:20}}/><Text style={{fontSize:16}} >Logout</Text></View></TouchableOpacity>
    </View>

    </Image>  );

    if (routeId === 'login') {
      return (
        <Login
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'items') {
      return (
        <DrawerLayoutAndroid
      drawerWidth={270}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>

        <Items
        {...this.props} 
        navigator={navigator} />
        </DrawerLayoutAndroid>

        );
    }
    if (routeId === 'store') {
      return (
        <DrawerLayoutAndroid
      drawerWidth={270}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>

        <Store
        {...this.props} 
        navigator={navigator} />
        </DrawerLayoutAndroid>

        );
    }
    if (routeId === 'me') {
      return (
        <DrawerLayoutAndroid
      drawerWidth={270}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>

        <Me
        {...this.props} 
        navigator={navigator} />
        </DrawerLayoutAndroid>

        );
    }
    if (routeId === 'minion') {
      return (
        <DrawerLayoutAndroid
      drawerWidth={270}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>

        <Minion
        {...this.props} 
        navigator={navigator} />
        </DrawerLayoutAndroid>
        );
    }
    if (routeId === 'eachStore') {
      return (
        <EachStore
        {...this.props} 
        name = {route.name}
        navigator={navigator} />
        );
    }
    if (routeId === 'eachMinion') {
      return (
        <EachMinion
        {...this.props} 
        minion = {route.minion}
        navigator={navigator} />
        );
    }
    if (routeId === 'birth') {
      return (
        <Birth
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'addstore') {
      return (
        <AddStore
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'addtransaction') {
      return (
        <AddTransaction
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'additem') {
      return (
        <AddItem
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'share') {
      return (
        <Share
        {...this.props} 
        navigator={navigator} />
        );
    }

  
   }




  render() {
    

    return (
      <View style={{flex:1}}>
      
     <Navigator
     style={{flex: 1}}
     ref={(nav) => { navigator = nav; }}
     initialRoute={{id: 'login', name: 'login'}}
     renderScene={this.renderScene.bind(this)}/>
             </View>
    )
}
}
