import { Text, StyleSheet } from 'react-native';

export default function LoveMessage({ text }: { text: string }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#ff69b4',
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: 16,
  },
});
