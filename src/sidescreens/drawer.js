import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function DrawerScreen({navigation}) {
  function gotosmall (){
   navigation.navigate('Example')
  }
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.sec_container}>
        <ImageBackground
          style={styles.sec_bg}
          source={require('../images/sec-bg.png')}
          resizeMode="cover">
          <View style={styles.user_text}>
            <Text style={styles.jaykey}>Hi Jaykey!</Text>
            <Text style={styles.what}>What pizza do you</Text>
            <Text style={styles.want}>Want to try today</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.third_container}>
        <Image
          style={styles.half_pizza}
          source={require('../images/h_pizza.png')}
        />
        <View style={styles.fourth_container}>
          <Text style={styles.reorder}>Reorder again?</Text>
          <Text style={styles.small}>
            SMALL, THIN CRUST, TOMATOES , BASIL, CHEESE
          </Text>
          <Text style={styles.$}>$12</Text>
          <TouchableOpacity style={styles.cart}>
            <LinearGradient
              colors={['#F5313F', '#FFA360']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.last_container}>
        <View>
          <Text style={styles.own} onPress={gotosmall}>Create your own pizza</Text>
          <Text style={styles.cost}>
            THE COST WILL DEPEND IN YOUR CUSTOMIZATION
          </Text>
          <Image
            style={styles.half_pizza}
            source={require('../images/f_pizza.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  text_container: {
    flex: 1,
  },
  menu: {
    width: 22,
    height: 20,
    marginLeft: 18,
    marginTop: 18,
  },
  Vector: {
    width: 25,
    height: 25,
    marginTop: 18,
    marginRight: 15,
  },
  deliver: {
    fontWeight: '300',
    paddingTop: 8,
    paddingLeft: 12,
    color: 'black',
  },
  home: {
    fontWeight: 'bold',
    marginTop: -3,
    paddingLeft: 12,
    color: 'black',
  },
  sec_container: {
    marginTop: 6,
  },
  sec_bg: {
    width: 425,
    height: 220,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  user_text: {
    flex: 1,
    margin: 20,
  },
  what: {
    fontSize: 28,
    borderColor: '#fff',
    borderLeftWidth: 2,
    paddingLeft: 16,
    marginTop: 10,
  },
  want: {
    fontSize: 28,
    borderColor: '#fff',
    borderLeftWidth: 2,
    paddingLeft: 16,
  },
  jaykey: {
    fontSize: 18,
  },
  third_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#rgba(255, 255, 255, 0.8)',
    marginLeft: 25,
    maxHeight: 275,
    marginRight: 25,
    marginTop: -50,
    borderRadius: 20,
    shadowColor: '#rgba(255, 255, 255, 0.8)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  half_pizza: {
    marginVertical: 10,
    height: 260,
  },
  fourth_container: {
    flex: 1,
    marginLeft: -30,
  },
  reorder: {
    marginTop: 50,
    color: '#F5313F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
    color: '#6D6E9C',
  },
  $: {
    marginVertical: 8,
    fontSize: 20,
    color: '#6D6E9C',
  },
  linearGradient: {
    borderRadius: 50,
    paddingVertical: 8,
    width: 150,
    marginVertical: 4,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 3,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  last_container: {
    backgroundColor: '#rgba(255, 255, 255, 0.8)',
    marginLeft: 25,
    maxHeight: 35,
    marginRight: 25,
    borderRadius: 20,
    shadowColor: '#rgba(255, 255, 255, 0.8)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  own: {
    color: '#F5313F',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  cost: {
    fontSize: 12,
    color: '#6D6E9C',
    textAlign: 'center',
    marginVertical: 6,
  },
});

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
