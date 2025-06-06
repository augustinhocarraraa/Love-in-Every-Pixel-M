// src/app/index.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Home() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#DDEEFF', '#FFC1CC', '#FFDAB9']}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Imagem decorativa (ex: coração) */}
        <Image
          source={require('../../assets/images/heart.png')} // Adicione um coração romântico
          style={styles.image}
        />

        {/* Título */}
        <Text style={styles.title}>Bem-vinda ao nosso mural 💖</Text>

        {/* Mensagem emocional */}
        <Text style={styles.message}>
          Esse mural é uma cápsula do que vivemos{'\n'}
          e do que ainda vive em mim.{'\n\n'}
          Um portal entre o que fomos{'\n'}
          e o que talvez ainda sejamos.
        </Text>

        {/* Botão de entrada */}
        <TouchableOpacity
          onPress={() => router.push('/dashboard')}
          style={styles.button}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <Text style={styles.footer}>
        Feito com carinho, por quem ainda acredita em nós. ❤️
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#2F4F4F',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 36,
  },
  button: {
    backgroundColor: '#FF7F50',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
    shadowColor: '#2F4F4F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: Platform.OS === 'android' ? 5 : 0,
  },
  buttonText: {
    color: '#DDEEFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    color: '#2F4F4F',
    textAlign: 'center',
    marginBottom: 12,
  },
});
