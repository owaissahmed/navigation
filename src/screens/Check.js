import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Order = ({navigation}) => {
  //   function gotosmall() {
  //     navigation.navigate('Example');
  //   }
  //   function gotomedium() {
  //     navigation.navigate('Splash');
  //   }
  function gotoTopping() {
    navigation.navigate('Topping');
  }
  function gotodrawer() {
    navigation.navigate('drawer');
  }
  return (
    <View style={Styles.main}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={gotoTopping}>
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
            <Image
              style={Styles.Create}
              source={require('../images/pizzaslice.png')}
            />
          </View>
          <Text style={Styles.small}>Check Your Custom Pizza</Text>

          <ImageBackground
            resizeMode="cover"
            style={Styles.ellipse}
            source={require('../images/halfellipse.png')}>
            <ImageBackground
              resizeMode="cover"
              style={Styles.border}
              source={require('../images/halfborder.png')}>
              <Image
                style={Styles.thin}
                source={require('../images/halfcheckpizza.png')}
              />
            </ImageBackground>
          </ImageBackground>
        </ImageBackground>
      </View>
      <View style={Styles.third_div}>
        <ImageBackground
          resizeMode="cover"
          source={require('../images/Rectangle.png')}
          style={Styles.rectangle}>
          <Image style={Styles.shop} source={require('../images/shop.png')} />
          <Text style={Styles.order}>ORDER SUMMARY</Text>
          <View style={Styles.bill}>
            <Text
              style={{
                marginTop: 8,
                fontSize: 12,
                padding: 3,
                marginLeft: 20,
                color: '#6D6E9C',
              }}>
              Medium Size
            </Text>
            <Text
              style={{
                fontSize: 10,
                padding: 3,
                marginRight: 20,
                marginTop: 11,
                color: '#6D6E9C',
                fontWeight: '700',
                letterSpacing: 1,
              }}>
              $10.00
            </Text>
          </View>
          <View style={Styles.bill}>
            <Text style={Styles.medium}>Thick Crust</Text>
            <Text style={Styles.price}>$4.00</Text>
          </View>
          <View style={Styles.bill}>
            <Text style={Styles.medium}>Pepperoni</Text>
            <Text style={Styles.price}>$0.00</Text>
          </View>
          <View style={Styles.bill}>
            <Text style={Styles.medium}>Black Olives</Text>
            <Text style={Styles.price}>$0.00</Text>
          </View>
          <View style={Styles.bill}>
            <Text style={Styles.medium}>Mashrooms</Text>
            <Text style={Styles.price}>$0.00</Text>
          </View>
          <View style={Styles.bill}>
            <Text style={Styles.medium}>Onions</Text>
            <Text style={Styles.price}>$0.50</Text>
          </View>
          <View style={Styles.finalbill}>
            <Text style={Styles.total}>Total:</Text>
            <Text style={Styles.Totalbill}>$14.50</Text>
          </View>
        </ImageBackground>
      </View>

      <TouchableOpacity style={Styles.last}>
        <LinearGradient colors={['#F5313F', '#FFA360']} style={Styles.linear}>
          <Text style={Styles.next}>Confirm Pizza</Text>
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
    fontSize: 25,
    marginLeft: 18,
    marginTop: 5,
    width: 190,
  },
  ellipse: {
    height: 600,
    width: 335,
    marginTop: -40,
    marginLeft: 135,
    justifyContent: 'center',
    alignItems: 'center',
  },
  third_div: {
    flex: 1,
    alignItems: 'center',
  },
  thin: {
    width: 370,
    height: 565,

    marginTop: 35,
    marginLeft: -40,
  },
  border: {
    width: 310,
    height: 580,
    marginLeft: -15,
    marginTop: -10,
  },
  sizediv: {
    display: 'flex',
    marginHorizontal: 22,
    backgroundColor: '#rgba(255, 255, 255, 0.6)',
    marginTop: 25,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 295,
    height: 361,

    marginTop: 20,
    marginLeft: -115,
    borderRadius: 10,
  },
  shop: {
    width: 15.17,
    height: 10.92,
    marginTop: 40,
    marginLeft: 28,
  },
  order: {
    color: 'red',
    fontSize: 10,
    padding: 3,
    paddingLeft: 26,
    fontWeight: '700',
    letterSpacing: 1,
    borderBottomColor: '#DADAE5',
    borderBottomWidth: 1,
  },
  bill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  medium: {
    fontSize: 12,
    padding: 3,
    marginLeft: 20,
    color: '#6D6E9C',
  },
  price: {
    fontSize: 10,
    padding: 6,
    marginRight: 20,
    color: '#6D6E9C',
    fontWeight: '700',
    letterSpacing: 1,
  },
  finalbill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#DADAE5',
    borderTopWidth: 1,
    marginTop: 15,
  },
  total: {
    fontSize: 14,
    padding: 3,
    marginLeft: 20,
    color: '#6D6E9C',
    fontWeight: '400',
    letterSpacing: 1,
    marginTop: 17,
  },
  Totalbill: {
    fontSize: 20,
    padding: 6,
    marginRight: 20,
    color: '#6D6E9C',
    fontWeight: '300',
    letterSpacing: -0.3,
    marginTop: 10,
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
  large: {
    fontSize: 15,
    paddingVertical: 6,
    marginRight: -12,
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
export default Order;
