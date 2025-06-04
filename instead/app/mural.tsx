import { ScrollView, View, StyleSheet } from 'react-native';
import LoveMessage from '@/components/Mural/LoveMessage';
import MemoryImage from '@/components/Mural/MemoryImage';
import SpotifyTrack from '@/components/Mural/SpotifyTrack';

export default function MuralScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LoveMessage text="Você é a melhor parte dos meus dias. Te amo!" />
      <MemoryImage source={require('@/assets/images/sua-imagem.jpg')} />
      <SpotifyTrack url="https://open.spotify.com/track/1rgnBhdG2JDFTbYkYRZAku" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
    alignItems: 'center',
  },
});
