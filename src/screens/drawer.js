import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DrawerScreen = ({navigation}) => {
  function Splash() {
    navigation.replace('Signup');
  }
  return (
    <View>
      <View style={styles.logo_div}>
        <Image source={require('../images/saylani.png')} />
        <Text style={styles.logo_text}>SAYLANI WELFARE</Text>
        <Text style={styles.logo_twotext}>ONLINE DISCOUNT STORE</Text>
      </View>
      <View>
        <TouchableOpacity onPress={Splash} style={styles.button_div}>
          <Text style={styles.button}> GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo_div: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 650,
    // backgroundColor: 'orange',
  },
  logo_text: {
    color: '#61B846',
    fontWeight: '700',
    fontSize: 30,
    marginTop: 30,
  },
  logo_twotext: {
    color: '#024F9D',
    fontWeight: '600',
    fontSize: 15,
  },
  button_div: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // flex:1,
    // backgroundColor: 'orange',
    // height: 320,
  },
  button: {
    backgroundColor: '#61B846',
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginTop: 90,
    width: 150,
    textAlign: 'center',
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
export default DrawerScreen;
// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
