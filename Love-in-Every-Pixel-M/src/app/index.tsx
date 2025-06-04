// src/app/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Maiane!</Text>
      <Button title='Entrar' onPress={() => alert('Você clicou no botão!')} />
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