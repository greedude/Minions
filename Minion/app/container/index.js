
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import store from '../store/store';


import Components from '../components/';


export default class Index extends Component {

  constructor(){
    super();
  }

  componentDidMount(){
  }
  render() {
    return (
      <View
       style={{flex:1}}>
       <StatusBar hidden={true} />
      <Provider store={store}>
        <Components/>
      </Provider>
      </View>);
  }
}
