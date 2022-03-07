import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle='dark-content' />
      <View>
        <Text>Ok</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;