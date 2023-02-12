// import React from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   Text,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Order = ({navigation}) => {
//   //   function gotosmall() {
//   //     navigation.navigate('Example');
//   //   }
//   //   function gotomedium() {
//   //     navigation.navigate('Splash');
//   //   }
//   function gotoTopping() {
//     navigation.navigate('Topping');
//   }
//   function gotodrawer() {
//     navigation.navigate('drawer');
//   }
//   return (
//     <View style={Styles.main}>
//       <View style={Styles.sec_div}>
//         <ImageBackground
//           resizeMode="cover"
//           style={Styles.bg}
//           source={require('../images/sec-bg.png')}>

//           <Text style={Styles.small}>Check Your Custom Pizza</Text>

//         </ImageBackground>
//       </View>
//       <View style={Styles.third_div}>
//         <ImageBackground
//           resizeMode="cover"
//           source={require('../images/Rectangle.png')}
//           style={Styles.rectangle}>
//           <Image style={Styles.shop} source={require('../images/shop.png')} />
//           <Text style={Styles.order}>ORDER SUMMARY</Text>
//           <View style={Styles.bill}>
//             <Text
//               style={{
//                 marginTop: 8,
//                 fontSize: 12,
//                 padding: 3,
//                 marginLeft: 20,
//                 color: '#6D6E9C',
//               }}>
//               Medium Size
//             </Text>
//             <Text
//               style={{
//                 fontSize: 10,
//                 padding: 3,
//                 marginRight: 20,
//                 marginTop: 11,
//                 color: '#6D6E9C',
//                 fontWeight: '700',
//                 letterSpacing: 1,
//               }}>
//               $10.00
//             </Text>
//           </View>
//           <View style={Styles.bill}>
//             <Text style={Styles.medium}>Thick Crust</Text>
//             <Text style={Styles.price}>$4.00</Text>
//           </View>
//           <View style={Styles.bill}>
//             <Text style={Styles.medium}>Pepperoni</Text>
//             <Text style={Styles.price}>$0.00</Text>
//           </View>
//           <View style={Styles.bill}>
//             <Text style={Styles.medium}>Black Olives</Text>
//             <Text style={Styles.price}>$0.00</Text>
//           </View>
//           <View style={Styles.bill}>
//             <Text style={Styles.medium}>Mashrooms</Text>
//             <Text style={Styles.price}>$0.00</Text>
//           </View>
//           <View style={Styles.bill}>
//             <Text style={Styles.medium}>Onions</Text>
//             <Text style={Styles.price}>$0.50</Text>
//           </View>
//           <View style={Styles.finalbill}>
//             <Text style={Styles.total}>Total:</Text>
//             <Text style={Styles.Totalbill}>$14.50</Text>
//           </View>
//         </ImageBackground>
//       </View>

//       <TouchableOpacity style={Styles.last}>
//         <LinearGradient colors={['#F5313F', '#FFA360']} style={Styles.linear}>
//           <Text style={Styles.next}>Confirm Pizza</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Styles = StyleSheet.create({
//   main: {
//     backgroundColor: '#E5E5E5',
//     flexDirection: 'column',
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   header: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   back: {
//     width: 17,
//     height: 15,
//     marginTop: 18,
//     marginLeft: 15,
//   },
//   Uncle: {
//     marginTop: 13,
//     color: '#6D6E9C',
//     marginBottom: 12,
//   },
//   home: {
//     width: 17,
//     height: 15,
//     marginTop: 18,
//     marginRight: 10,
//   },
//   bg: {
//     width: 425,
//     height: 287,
//   },
//   Create$: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   Create: {
//     fontSize: 24,
//     marginLeft: 18,
//     marginTop: 18,
//   },
//   $: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginRight: 18,
//     marginTop: 18,
//   },
//   small: {
//     fontSize: 25,
//     marginLeft: 18,
//     marginTop: 5,
//     width: 190,
//   },
//   ellipse: {
//     height: 600,
//     width: 335,
//     marginTop: -40,
//     marginLeft: 135,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   third_div: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   thin: {
//     width: 370,
//     height: 565,

//     marginTop: 35,
//     marginLeft: -40,
//   },
//   border: {
//     width: 310,
//     height: 580,
//     marginLeft: -15,
//     marginTop: -10,
//   },
//   sizediv: {
//     display: 'flex',
//     marginHorizontal: 22,
//     backgroundColor: '#rgba(255, 255, 255, 0.6)',
//     marginTop: 25,
//     paddingTop: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   rectangle: {
//     width: 295,
//     height: 361,

//     marginTop: 20,
//     marginLeft: -115,
//     borderRadius: 10,
//   },
//   shop: {
//     width: 15.17,
//     height: 10.92,
//     marginTop: 40,
//     marginLeft: 28,
//   },
//   order: {
//     color: 'red',
//     fontSize: 10,
//     padding: 3,
//     paddingLeft: 26,
//     fontWeight: '700',
//     letterSpacing: 1,
//     borderBottomColor: '#DADAE5',
//     borderBottomWidth: 1,
//   },
//   bill: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   medium: {
//     fontSize: 12,
//     padding: 3,
//     marginLeft: 20,
//     color: '#6D6E9C',
//   },
//   price: {
//     fontSize: 10,
//     padding: 6,
//     marginRight: 20,
//     color: '#6D6E9C',
//     fontWeight: '700',
//     letterSpacing: 1,
//   },
//   finalbill: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderTopColor: '#DADAE5',
//     borderTopWidth: 1,
//     marginTop: 15,
//   },
//   total: {
//     fontSize: 14,
//     padding: 3,
//     marginLeft: 20,
//     color: '#6D6E9C',
//     fontWeight: '400',
//     letterSpacing: 1,
//     marginTop: 17,
//   },
//   Totalbill: {
//     fontSize: 20,
//     padding: 6,
//     marginRight: 20,
//     color: '#6D6E9C',
//     fontWeight: '300',
//     letterSpacing: -0.3,
//     marginTop: 10,
//   },

//   size: {
//     fontSize: 20,
//     color: '#6D6E9C',
//   },
//   smldiv: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignSelf: 'center',
//     marginTop: 25,
//     width: 360,
//     textAlign: 'center',
//   },
//   large: {
//     fontSize: 15,
//     paddingVertical: 6,
//     marginRight: -12,
//     color: '#6D6E9C',
//   },
//   cart: {
//     width: 98,
//     height: 58,
//   },
//   smal: {
//     fontSize: 15,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   linearGradient: {
//     borderRadius: 50,
//     paddingVertical: 6,
//   },
//   linear: {
//     height: 59,
//     marginTop: 100,
//   },
//   last: {
//     width: '100%',
//   },
//   next: {
//     textAlign: 'center',
//     paddingVertical: 18,
//     fontWeight: 'bold',
//   },
// });
// export default Order;

import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
// import Picker from '@react-native-picker/picker';
import React, {useState} from 'react';
// import DocumentPicker from 'react-native-document-picker';
const Order = () => {
  const [selected, setSelected] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <ScrollView style={{flex: 10, height: '100%'}}>
      <View
        style={{
          flex: 1.5,
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          alignItems: 'center',
          height: 100,
        }}>
        <View
          style={{
            width: '90%',
            height: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
          <View
          style={{
            width: '30%',
            height: '45%',
            marginRight: 5,
          }}>
              <Image source={require('../images/vegi.png')} />
              </View>
            <View>
              <Text style={styles.adminName}>Mr.Ahmed</Text>
              <Text style={styles.adminSpecialName}>Admin</Text>
            </View>
            </View>
            <Image source={require('../images/vegi.png')} />
            </View>
            </View>
      <View style={{flex: 8.5, alignItems: 'center'}}>
        <View style={{width: '90%'}}>
          <Text style={styles.newtilte}>Add New Item</Text>
          <View style={styles.imginp}>
            <TouchableHighlight>
              <Image source={require('../images/vegi.png')} />
              </TouchableHighlight>
              </View>
              <TextInput
              style={styles.input1}
            //onChangeText={t=>{}}
            placeholder="Item Name"
            placeholderTextColor={'gray'}
            color="black"
            fontSize={20}
            padding={10}
            />
            <TextInput
            style={styles.input2}
            //onChangeText={t=>{}}
            placeholder="Describe this item"
            placeholderTextColor={'gray'}
            color="black"
            fontSize={20}
            padding={10}
            />
          <View style={{height: 250}}>
          <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={{color: '#024f9d', fontSize: 20}}>Unit Name : </Text>
              <TextInput
                style={styles.input3}
                //onChangeText={t=>{}}
                placeholder="Pcs / Kg / dozn"
                color="black"
                placeholderTextColor={'gray'}
                fontSize={18}
                padding={10}
                />
            </View>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Text style={{color: '#024f9d', fontSize: 20}}>
              Unit Price :{' '}
              </Text>
              <TextInput
              style={styles.input3}
              //onChangeText={t=>{}}
              placeholder="$3600"
                color="black"
                placeholderTextColor={'gray'}
                fontSize={18}
                padding={10}
              />
              </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
              }}>
              <TouchableOpacity
              style={styles.btn}
                onPress={() => navigation.replace('AccountsPage')}>
                <Text style={styles.btntxt}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input3: {
    backgroundColor: 'lightgray',
    height: 40,
    width: '50%',
    fontSize: 10,
    borderRadius: 20,
  },
  input2: {
    backgroundColor: 'lightgray',
    height: 120,
    width: '100%',
    marginTop: 5,
    borderRadius: 20,
  },
  btn: {
    backgroundColor: '#61B846',
    width: 226,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 70,
  },
  btntxt: {
    color: 'white',
    fontSize: 33,
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: 'lightgray',
    height: 40,
    width: '100%',
    borderRadius: 20,
    marginTop: 5,
  },
  input1: {
    backgroundColor: 'lightgray',
    height: 40,
    width: '100%',
    marginTop: 5,
    borderRadius: 20,
  },
  imginp: {
    backgroundColor: 'lightgray',
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  desc: {
    backgroundColor: 'lightgray',
    height: '50%',
    width: '100%',
    borderRadius: 20,
  },
  logo: {
    width: 336,
    height: 263,
    marginTop: 100,
  },
  adminName: {
    color: '#024f9d',
    fontSize: 30,
    fontWeight: 'bold',
  },
  adminSpecialName: {
    color: '#61b846',
    fontSize: 30,
    fontWeight: 'bold',
  },
  prof: {
    borderColor: '#61b846',
    borderRadius: '50%',
    borderWidth: '1px',
  },
  newtilte: {
    color: '#024f9d',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
export default Order;
