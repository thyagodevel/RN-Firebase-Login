import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {
    
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', }} >
      <View style={{ width: 300, borderWidth: 2, borderColor: '#DADADD', padding: 20, borderRadius: 4, }} >
        <TextInput
          style={{ height: 36, backgroundColor: 'grey', marginBottom: 12, borderRadius: 4, fontSize: 18, padding: 8, color: '#FFFFFF', }}
          onChangeText={(t) => setEmail(t)}
          value={email}
        />
        <TextInput
          style={{ height: 36, backgroundColor: 'grey', marginBottom: 12, borderRadius: 4, fontSize: 18, padding: 8, color: '#FFFFFF', }}
          secureTextEntry={true}
          onChangeText={(t) => setPassword(t)}
          value={password}
        />
        <TouchableOpacity
          style={{ height: 28, backgroundColor: '#DADADD', borderRadius: 4, justifyContent: 'center', alignItems: 'center', }}
          onPress={() => {SignIn()}}
        >
          <Text>Criar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login;