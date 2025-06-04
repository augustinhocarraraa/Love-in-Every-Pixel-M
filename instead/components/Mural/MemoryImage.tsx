import { Image, StyleSheet } from 'react-native';

export default function MemoryImage({ source }: { source: any }) {
  return <Image source={source} style={styles.image} resizeMode="cover" />;
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 16,
  },
});
