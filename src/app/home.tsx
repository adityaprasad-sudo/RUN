import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.pageContent}>
      <Text style={styles.text}>This is the new Home page file.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#7A735E',
  }
});