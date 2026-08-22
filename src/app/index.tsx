
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
      

      

      <LinearGradient
        colors={['#fcfcfc','#D3CDB5']}
        start={{ x: -1, y: 0 }}
        end={{ x: 2, y: 1 }}
        style={styles.background}
      >
      <View style={styles.upperrect}>
        <LinearGradient
        colors={['#EFF0EB','#E0DACC']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.upperrect}
      ><Text style={styles.name}>Chigga Nigga</Text><Text style={styles.subtitle}>RUN!</Text>
      <View style={styles.profileCrater}>
  <View style={styles.profileImage}>
    
  </View>
</View>
      </LinearGradient>
      
      </View>
      </LinearGradient>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: { flex: 1,},
  upperrect: {
    width: '100%',
    height: 170,
    backgroundColor: '#ffffff',
    borderBottomRightRadius: 80,
     borderBottomLeftRadius: 80,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.08)',
  },
  name: {
    color: '#CBC7BD',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '16%',
    marginLeft: '12%',
    fontFamily: 'system',
  },
  subtitle: {
    color: '#A6A297',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: '12%',
    fontFamily: 'system',
  },
  profileCrater: {
  position: 'absolute',
  top: 65,
  right: 35,
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: '#E0DACC',
  alignItems: 'center',
  justifyContent: 'center',
  

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.15,
  shadowRadius: 10,
  elevation: 5,
},
profileImage: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: '#EBA474',
  borderWidth: 2,
  borderColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
}

});