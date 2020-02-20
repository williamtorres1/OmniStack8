import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Login from './src/pages/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#89c980', 
    justifyContent: 'center', //estilização verticalmente
    alignItems: 'center', //estilização horizontalmente
  },
  text: {
    fontWeight:'bold',
    color:'#FFF',
  }
})