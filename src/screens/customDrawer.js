// import React from 'react';

// import {
//   Text,
//   View,
//   Button,
//   Image,
//   StyleSheet,
//   ImageBackground,
// } from 'react-native';

// const CustomDrawer = ({navigation}) => {
//   return (
//     <View style={styles.main}>
//       <View style={styles.profileback}>
//         <ImageBackground
//           style={styles.profilebackground}
//           resizeMode="cover"
//           source={require('../images/profileback.png')}>
//           <Image
//             style={styles.profile}
//             source={require('../images/profile.png')}
//           />
//         </ImageBackground>
//         <Text style={styles.name}>Jaykey del Mar</Text>
//         <Text style={styles.gmail}>janedone@gmail.com</Text>
//       </View>
//       <View style={styles.maintwo}>
//         <View style={styles.subdiv}>
//           <Image
//             style={styles.profileicon}
//             source={require('../images/profileicon.png')}
//           />
//           <Text style={styles.profiletext}>Profile</Text>
//         </View>
//         <View style={styles.subdiv}>
//           <Image
//             style={{
//               backgroundColor: 'transparent',
//               width: 25,
//               height: 15,
//               marginLeft: 45,
//             }}
//             source={require('../images/Payment.png')}
//           />
//           <Text style={styles.profiletext}>Payment Method</Text>
//         </View>
//         <View style={styles.subdiv}>
//           <Image
//             style={styles.profileicon}
//             source={require('../images/order.png')}
//           />
//           <Text style={styles.profiletext}>Order History</Text>
//         </View>
//         <View style={styles.subdiv}>
//           <Image
//             style={{
//               backgroundColor: 'transparent',
//               width: 24,
//               height: 27,
//               marginLeft: 45,
//             }}
//             source={require('../images/Location.png')}
//           />
//           <Text style={styles.profiletext}>Addresses</Text>
//         </View>
//         <View style={styles.subdiv}>
//           <Image
//             style={styles.profileicon}
//             source={require('../images/Help.png')}
//           />
//           <Text style={styles.profiletext}>Help Center</Text>
//         </View>
//         <View style={styles.lastdiv}>
//           <Image
//             style={styles.profileicon}
//             source={require('../images/Settings.png')}
//           />
//           <Text style={styles.profiletext}>Settings</Text>
//         </View>
//         <View style={styles.subdiv}>
//           <Image
//             style={{  backgroundColor: 'transparent',
//             width: 24,
//             height: 28,
//             marginLeft: 45,}}
//             source={require('../images/logout.png')}
//           />
//           <Text style={styles.profiletext}>Log Out</Text>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: 'black',
//   },
//   profileback: {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 300,
//   },
//   profilebackground: {
//     width: 150,
//     height: 150,
//   },
//   profile: {
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     width: 145,
//     height: 145,
//     top: 6,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginTop: 12,
//     color: 'gray',
//   },
//   gmail: {
//     fontSize: 13,
//     fontWeight: '400',
//     color: 'grey',
//   },
//   maintwo: {
//     backgroundColor: 'lightgrey',
//     height: '100%',
//   },
//   subdiv: {
//     display: 'flex',
//     flexDirection: 'row',
//     // justifyContent:;,
//     // backgroundColor: 'green',
//     marginTop: 30,
//     height: 30,
//     alignItems: 'center',
//     // alignSelf: 'center',
//     // alignContent:'center'
//   },
//   profileicon: {
//     backgroundColor: 'transparent',
//     width: 24,
//     height: 22,
//     marginLeft: 45,

//     // marginTop:40
//   },
//   profiletext: {
//     marginLeft: 55,
//     // marginTop:40
//     fontSize: 13,
//     fontWeight: '400',
//     color: 'grey',
//   },
//   lastdiv: {
//     display: 'flex',
//     flexDirection: 'row',
//     // justifyContent:;,
//     // backgroundColor: 'green',
//     marginTop: 130,
//     height: 30
//   },
// });
// export default CustomDrawer;
