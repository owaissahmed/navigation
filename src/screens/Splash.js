import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  function gotoLarge() {
    navigation.navigate('Large');
  }
  function gotosmall() {
    navigation.navigate('Example');
  }
  function gotoThin() {
    navigation.navigate('Thin');
  }
  function gotodrawer() {
    navigation.navigate('drawer');
  }
  return (
    <View style={Styles.main}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={gotodrawer}>
          <Image style={Styles.back} source={require('../images/back.png')} />
        </TouchableOpacity>
        <Text style={Styles.Uncle}>Uncle John Pizza</Text>
        <TouchableOpacity onPress={gotodrawer}>
          <Image style={Styles.home} source={require('../images/home.png')} />
        </TouchableOpacity>
      </View>
      <View style={Styles.sec_div}>
        <ImageBackground
          resizeMode="cover"
          style={Styles.bg}
          source={require('../images/sec-bg.png')}>
          <View style={Styles.Create$}>
            <Text style={Styles.Create}>Create Your Pizza</Text>
            <Text style={Styles.$}>$10.00</Text>
          </View>
          <Text style={Styles.small}>SIZE,CRUST,TOPPINGS</Text>
        </ImageBackground>
      </View>
      <View style={Styles.third_div}>
        <ImageBackground
          style={Styles.ellipse}
          resizeMode="cover"
          source={require('../images/ellipse.png')}>
          <ImageBackground
            style={Styles.border}
            resizeMode="cover"
            source={require('../images/border.png')}>
            <Image
              style={Styles.thin}
              source={require('../images/medium.png')}
            />
          </ImageBackground>
        </ImageBackground>
      </View>
      <View style={Styles.onezero}>
        <Text style={Styles.one}>12*</Text>
      </View>
      <View style={Styles.sizediv}>
        <Text style={Styles.size}>Choose your Size</Text>
        <View style={Styles.smldiv}>
          <Text onPress={gotosmall} style={Styles.medium}>
            Small
          </Text>
          <TouchableOpacity style={Styles.cart}>
            <LinearGradient
              colors={['#F5313F', '#FFA360']}
              style={Styles.linearGradient}>
              <Text style={Styles.smal}>Medium</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text onPress={gotoLarge} style={Styles.large}>
            Large
          </Text>
        </View>
      </View>
      <TouchableOpacity style={Styles.last}>
        <LinearGradient colors={['#F5313F', '#FFA360']} style={Styles.linear}>
          <Text onPress={gotoThin} style={Styles.next}>
            Next
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    width: 17,
    height: 15,
    marginTop: 18,
    marginLeft: 15,
  },
  Uncle: {
    marginTop: 13,
    color: '#6D6E9C',
    marginBottom: 12,
  },
  home: {
    width: 17,
    height: 15,
    marginTop: 18,
    marginRight: 10,
  },
  bg: {
    width: 425,
    height: 287,
  },
  Create$: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Create: {
    fontSize: 24,
    marginLeft: 18,
    marginTop: 18,
  },
  $: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 18,
    marginTop: 18,
  },
  small: {
    fontSize: 10,
    marginLeft: 18,
    marginTop: 5,
  },
  ellipse: {
    height: 335,
    width: 335,
    marginTop: -190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  third_div: {
    flex: 1,
    alignItems: 'center',
  },
  thin: {
    width: 380,
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -17,
  },
  border: {
    width: 315,
    alignItems: 'center',
    alignContent: 'center',
    height: 315,
  },

  onezero: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100,
    marginTop: 110,
  },
  one: {
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 40,
    textAlign: 'center',
    borderRadius: 50,
  },
  sizediv: {
    display: 'flex',
    marginHorizontal: 22,
    backgroundColor: '#rgba(255, 255, 255, 0.6)',
    marginTop: 25,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  size: {
    fontSize: 20,
    color: '#6D6E9C',
  },
  smldiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 25,
    width: 360,
    textAlign: 'center',
  },
  medium: {
    fontSize: 15,
    padding: 6,
    color: '#6D6E9C',
  },
  large: {
    fontSize: 15,
    paddingVertical: 6,
    marginRight: 12,
    color: '#6D6E9C',
  },
  cart: {
    width: 98,
    height: 58,
  },
  smal: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linearGradient: {
    borderRadius: 50,
    paddingVertical: 6,
  },
  linear: {
    height: 59,
    marginTop: 100,
  },
  last: {
    width: '100%',
  },
  next: {
    textAlign: 'center',
    paddingVertical: 18,
    fontWeight: 'bold',
  },
});

export default Splash;
