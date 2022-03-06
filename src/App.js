import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './routes/StackScreens';

const App = () => {
  return (
    <NavigationContainer>
        <StackScreens />
    </NavigationContainer>
  )
}

export default App