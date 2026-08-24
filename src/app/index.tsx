import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import * as haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
function Bouncy({name, size = 30, color = '#92876a', onPress}:any) {
  const scale = useRef(new Animated.Value(1)).current;
  const pressing = () => {
    haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
    Animated.spring(scale, {
      toValue: 0.82,
      speed: 50,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  }
  const releasing = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 140,
      useNativeDriver: true,
    }).start();
  }
  return (
    <Pressable onPressIn={pressing} onPressOut={releasing} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Ionicons name={name} size={size} color={color} />
      </Animated.View>
    </Pressable>
  );
}
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
  const upani = useRef(new Animated.Value(250)).current;
  useEffect(() => {
    Animated.spring(upani, {
      toValue: 0,
      friction: 6,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }, [upani]);
  return (
    <View style={styles.container}>
      

      

      <LinearGradient
        colors={['#fcfcfc','#D3CDB5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
      <Animated.View style={[styles.upperrect, { transform: [{ translateY: downani }] }]}>
        <LinearGradient
        colors={['#E0DACC','#fcfcfc']}
        start={{ x: 0, y: 0}}
        end={{ x: 0, y: 1}}
        style={styles.upperrect}
      ><Text style={styles.name}>Welcome Back</Text><Text style={styles.subtitle}>Chigga!</Text>
      <View style={styles.profileCrater}>
  <View style={styles.profileImage}>
    <Ionicons name="person-circle-outline" size={40} color="white" />
  </View>
</View>
      </LinearGradient>
      
      </Animated.View>
      <Animated.View style={[styles.lowerrect, { transform: [{ translateY: upani }] }]}>
      <LinearGradient
        colors={['#fcfcfc','#D3CDB5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.34}}
        style={styles.lowerrect}
      >
      <BlurView intensity={60} tint="light" style={styles.navcunt}>
        <Bouncy name="home"></Bouncy>
        <Bouncy name="sparkles"></Bouncy>
        <Bouncy name="navigate-circle-outline"></Bouncy>
        <Bouncy name="settings"></Bouncy>

      </BlurView>

      </LinearGradient>
      </Animated.View>
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
  navicon: {
    fontSize: 30,
    color: '#92876a',
  },
  navcunt: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 15,
  },
  navbtnpressed:{
    fontSize: 10,
    color: '#050505',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
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
navbtn:{
  width: 50,
  height: 50,
  backgroundColor: '#f5f2f000',
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