import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <LinearGradient
        colors={['#fcfcfc','#e6b08f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 1 }}
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