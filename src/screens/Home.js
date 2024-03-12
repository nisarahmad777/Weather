import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from '../dimensions/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from '../components/Cards';

const Home = props => {
  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'Islamabad',
      Image: require('../assets/images/islamabad.jpg'),
    },
    {
      name: 'New York',
      Image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'San Fransisco',
      Image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'New Jersey',
      Image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'London',
      Image: require('../assets/images/image7.jpg'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/weather.jpeg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View style={styles.mainHeaderView}>
        <View style={styles.headerView}>
          <Icon name="menu" size={40} color="white" />
          <Image
            source={require('..//assets/images/userImage.png')}
            style={styles.userImage}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={styles.searchHeading}>Hello Nisar</Text>
          <Text style={styles.searchParagraph}>Search City by name</Text>
          <View style={styles.searchView}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor={'white'}
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {
                  name: city,
                })
              }>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.locationTxt}>My Locations</Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.Image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  locationTxt: {
    color: 'white',
    fontSize: 25,
    paddingHorizontal: 10,
    marginTop: 220,
    marginBottom: 20,
  },
  mainHeaderView: {
    position: 'absolute',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerView: {
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
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchHeading: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  searchParagraph: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});
