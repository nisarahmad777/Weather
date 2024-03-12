import {View, Image, ImageBackground, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deviceHeight, deviceWidth} from '../dimensions/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {Api_key} from '../Constants/Constants';

export default function Details(props) {
  const [data, setData] = useState('');
  const {name} = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Api_key}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, color: 'white'}}>{title}</Text>
      <Text style={{fontSize: 22, color: 'white'}}>{value}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View style={styles.absoluteView}>
        <View style={styles.searchView}>
          <Icon name="menu" size={40} color="white" />
          <Image
            source={require('../assets/images/userImage.png')}
            style={styles.userImage}
          />
        </View>
        {data ? (
          <View style={styles.weatherDetailsView}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>
            <Text style={{fontSize: 64, color: 'white'}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>
            <View>
              <Text style={styles.weatherDeatilstxt}>Weather Details</Text>
              <View style={{width: deviceWidth - 60}}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  absoluteView: {
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 20,
  },
  userImage: {
    height: 46,
    width: 46,
    borderRadius: 50,
  },
  weatherDetailsView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: deviceHeight - 100,
  },
  weatherDeatilstxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 16,
  },
});
