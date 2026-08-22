import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.background}
      >
        
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});