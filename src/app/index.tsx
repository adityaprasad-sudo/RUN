import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
  const downani = useRef(new Animated.Value(-250)).current;
  useEffect(() => {
    Animated.spring(downani, {
      toValue: 0,
      friction: 6,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }, [downani]);
  return (
    <View style={styles.container}>
      

      

      <LinearGradient
        colors={['#fcfcfc','#D3CDB5']}
        start={{ x: -1, y: 0 }}
        end={{ x: 2, y: 1 }}
        style={styles.background}
      >
      <Animated.View style={[styles.upperrect, { transform: [{ translateY: downani }] }]}>
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
      
      </Animated.View>
      <LinearGradient
        colors={['#fcfcfc','#D3CDB5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.34}}
        style={styles.lowerrect}
      >
      <BlurView intensity={60} tint="light" style={styles.lowerrect}>

      </BlurView>

      </LinearGradient>
      
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
    borderBottomRightRadius: 40,
     borderBottomLeftRadius: 40,
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
  

  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 100},
  shadowOpacity: 1,
  shadowRadius: 200,
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
},
lowerrect: {
  position: 'absolute',
  bottom: -1,
  overflow: 'hidden',
  flex: 1,
  width: '101%',
  height: 100,
  zIndex: 1,
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 100},
  shadowOpacity: 1,
  shadowRadius: 200,
  
  
  alignSelf: 'center',
  justifyContent: 'flex-end',
  borderRadius: 40,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,

}

});