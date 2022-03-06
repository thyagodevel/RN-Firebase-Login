import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {
    auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log('logado');
      navigation.navigate('Home');

    }).catch((error) => {
      console.log('Erro atual: ' + error);
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000', }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle='light-content' />
      <View style={{ height: 50 }} >
        <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase' }} >Login</Text>
      </View>
      <View style={{ width: 400, height: 180, justifyContent: 'center', borderWidth: 2, borderColor: '#DADADD', borderRadius: 4, paddingHorizontal: 38 }} >
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
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login;