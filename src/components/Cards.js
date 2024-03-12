import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from '../dimensions/Dimensions';

export default function Cards({name, image, navigation}) {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 5}}
      onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 10}}
      />
      <View style={styles.cardView}>
        <Text style={styles.cardText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cardView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  cardText: {
    fontSize: 28,
    height: '100%',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
