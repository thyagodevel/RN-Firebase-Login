import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {
    auth().createUserWithEmailAndPassword(email, password).then(() => {
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
      <View style={{ width: 400, height: 250, justifyContent: 'center', borderWidth: 2, borderColor: '#DADADD', borderRadius: 4, paddingHorizontal: 38 }} >
        <View style={{ height: 50, alignItems: 'center' }} >
          <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase' }} >Registry</Text>
        </View>
        <TextInput
          style={{ height: 36, backgroundColor: '#FFFFFF', marginBottom: 12, borderRadius: 4, fontSize: 18, padding: 8, }}
          placeholder='Digite seu e-mail'
          onChangeText={(t) => setEmail(t)}
          value={email}
        />
        <TextInput
          style={{ height: 36, backgroundColor: '#FFFFFF', marginBottom: 12, borderRadius: 4, fontSize: 18, padding: 8, }}
          placeholder='Digite sua senha'
          secureTextEntry={true}
          onChangeText={(t) => setPassword(t)}
          value={password}
        />
        <TouchableOpacity
          style={{ height: 28, backgroundColor: '#DADADD', borderRadius: 4, justifyContent: 'center', alignItems: 'center', marginBottom: 12, }}
          onPress={() => {SignIn()}}
        >
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', flexDirection: 'row', }} >
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold', }} >
            Já possui cadastro?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
            <Text style={{ color: '#538EDF', fontWeight: 'bold', }} > Entre aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login;