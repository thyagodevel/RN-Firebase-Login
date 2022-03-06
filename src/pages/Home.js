import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle='dark-content' />
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home;