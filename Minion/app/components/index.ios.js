import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View,
  BackAndroid
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

    if (routeId === 'login') {
      return (
        <Login
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'items') {
      return (
        <Items
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'store') {
      return (
        <Store
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'me') {
      return (
        <Me
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'minion') {
      return (
        <Minion
        {...this.props} 
        navigator={navigator} />
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
    return <TabView navigator={navigator}/>

  
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
