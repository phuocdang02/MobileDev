/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; */

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Dang</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */


import React, { Component } from 'react';
import Hello from './components/HelloComponents';

class App extends Component {
  render() {
    return (
      <Hello name='TDK' />
    );
  }
}
export default App;