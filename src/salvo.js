import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

const ok = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    auth().createUserWithEmailAndPassword(email, password).then(() => {
      console.log('Usuário criado com sucesso!');
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Este email ja esta em uso');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('Este email esta inválido');
      }

      console.log(error);
    })
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
          onPress={() => {createUser()}}
        >
          <Text>Criar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}