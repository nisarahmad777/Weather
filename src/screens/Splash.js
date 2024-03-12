import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const checkSplashScreen = async () => {
      try {
        const splashShown = await AsyncStorage.getItem('splashShown');
        if (splashShown !== 'true') {
          setTimeout(() => {
            navigation.replace('Home');
          }, 2000);

          await AsyncStorage.setItem('splashShown', 'true');
        } else {
          navigation.replace('Home');
        }
      } catch (error) {
        console.error('Error checking splash screen:', error);
      }
    };

    checkSplashScreen();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../assets/images/splashScreen.png')}
        style={{height: 300, width: 300}}
      />
      <Text style={{fontSize: 30, marginTop: 20, fontWeight: '600'}}>
        Weather
      </Text>
    </View>
  );
};

export default Splash;
