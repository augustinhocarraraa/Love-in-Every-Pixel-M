import { Linking, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SpotifyTrack({ url }: { url: string }) {
  const openSpotify = () => Linking.openURL(url);

  return (
    <TouchableOpacity style={styles.button} onPress={openSpotify}>
      <Text style={styles.text}>🎵 Ouvir no Spotify</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
