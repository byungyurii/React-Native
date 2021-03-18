import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  name = 'beomjun';
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/*
      {(() => {
        if (name === 'Hanbit') return 'my name is hanbit';
        else if (name ==='beomjun') return 'my name is beomjun';
        else return 'my name is nothing';
      })()}
      */}
      {/*
      <Text style={styles.Text}>
        My name is {name === 'beomjun' ? 'Beomjun Kim' : 'noting'}
      </Text>
      */}
      
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
});
