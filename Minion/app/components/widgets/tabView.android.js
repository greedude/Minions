import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  Dimensions,
  View,

} from 'react-native';

var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerLayout from './drawerLayout'


export default class TabView extends Component {
  constructor(props){
    super(props)
 
  }
  renderNavigationView() {
    return (
      <View style={styles.drawer}/>
      )

  }
  
  render() {
    return (
      <DrawerLayout
        ref="drawer"
        drawerWidth={290}
        drawerPosition="left"
        renderNavigationView={this.renderNavigationView}
        >
        <View style={styles.content}>
          
        </View>
      </DrawerLayout>
    );
  }
}

var styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  }
})
