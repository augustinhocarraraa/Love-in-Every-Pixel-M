// src/app/index.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useRouter } from 'expo-router';

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter();

  return (
  <View style={styles.container}>
      <Text style={styles.title}>Olá, {name}!</Text>
      <Input
        placeholder='Digite seu nome'
        onChangeText={text => setName(text)}
        />
      <Button title='Entrar'
      onPress={() => {
      if (name.trim() !== ''){
        router.push('/dashboard');
      } else{
        alert
      }
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F4F4F', // Um verde igual a sua unha linda! 😉
  },
});