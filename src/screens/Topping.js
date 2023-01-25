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

const Extratopping = ({navigation}) => {
  function gotoThin() {
    navigation.navigate('Thin');
  }
  function gotodrawer() {
    navigation.navigate('drawer');
  }
  function gotocheck() {
    navigation.navigate('Check');
  }
  const toppingsobj = [
    {
      index: '1',
      toppings: 'Pepperoni',
      image: require('../images/thin.png'),
    },
    {
      index: '2',
      toppings: 'Mashroom',
      image: require('../images/thin.png'),
    },
    {
      index: '3',
      toppings: 'Olive',
      image: require('../images/thin.png'),
    },
    {
      index: '4',
      toppings: 'Onions',
      image: require('../images/thin.png'),
    },
    {
      index: '5',
      toppings: 'Capsicum',
      image: require('../images/thin.png'),
    },
    {
      index: '6',
      toppings: 'Jalapeno',
      image: require('../images/thin.png'),
    },
  ];
  return (
    <View style={Styles.main}>
      <View style={Styles.header}>
        <TouchableOpacity onPress={gotoThin}>
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
            <Text style={Styles.$}>$12.00</Text>
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
      <View
        style={{
          backgroundColor: '#FFFFFF60',
          width: 335,
          height: 181,
          alignSelf: 'center',
          // top: 70,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <View
          style={{marginTop: 10, paddingVertical: 20, alignItems: 'center'}}>
          <Text style={{color: '#6D6E9C', fontSize: 20}}>
            Choose upto <Text style={{fontWeight: 'bold'}}>7 Toppings</Text>
          </Text>
        </View>
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <FlatList
            keyExtractor={key => {
              return key.index;
            }}
            horizontal
            data={toppingsobj}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#ffffff',
                    marginLeft: 20,
                    width: 230,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 5,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    margin: 10,
                  }}>
                  <View style={{width: 50, marginLeft: 10}}>
                    <Image
                      style={{width: 50, height: 50}}
                      source={item.image}
                    />
                  </View>
                  <View
                    style={{
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#6D6E9C',
                      }}>
                      {item.toppings}
                    </Text>
                    <Text style={{fontSize: 11, color: '#6d6e9c'}}>+$0.00</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#F4F3F9',
                      width: 20,
                      height: 20,
                      borderBottomRightRadius: 20,
                      borderBottomLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                      alignSelf: 'center',
                    }}>
                    <TouchableOpacity></TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={Styles.last}>
        <LinearGradient colors={['#F5313F', '#FFA360']} style={Styles.linear}>
          <Text onPress={gotocheck} style={Styles.next}>NEXT</Text>
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
    width: 62,
    padding: 3,
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
export default Extratopping;

// import React from 'react';

// import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';

// const Toppingfun = () => {
//   // const  [ pizzaimage , setpizzaimage] =(false)
//   const toppingsobj = [
//     {
//       index: '1',
//       toppings: 'Pepperoni',
//       image: require('../images/thin.png'),
//       // imagepizza :setpizzaimage(require("../../assets/pepperonipizza.png"))
//     },
//     {
//       index: '2',
//       toppings: 'Mashroom',
//       image: require('../images/thin.png'),
//       // imagepizza : setpizzaimage(require("../../assets/mashroomspizza.png")),
//     },
//     {
//       index: '3',
//       toppings: 'Olive',
//       image: require('../images/thin.png'),
//
//     },
//     {
//       index: '4',
//       toppings: 'Onions',
//       image: require('../images/thin.png'),
//
//     },
//     {
//       index: '5',
//       toppings: 'Capsicum',
//       image: require('../images/thin.png'),
//
//     },
//     {
//       index: '6',
//       toppings: 'Jalapeno',
//       image: require('../images/thin.png'),
//
//     },
//   ];
//   return (
//     <View>
//       <View>
//         <LinearGradient
//           tart={{x: 0, y: 1}}
//           end={{x: 1, y: 0}}
//           colors={['#F5313F', '#FFA360']}
//           style={{height: 287}}>
//           <View style={{padding: 10, width: 250}}>
//             <Text style={{fontSize: 25, color: 'white'}}>
//               Create Your Pizza{' '}
//             </Text>
//             <Text style={{fontSize: 10, color: 'white'}}>
//               SIZE, CRUST, TOPPING
//             </Text>
//           </View>
//           <View style={{alignItems: 'flex-end', bottom: 55, right: 10}}>
//             <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
//               $14.00
//             </Text>
//           </View>

//           <View
//             style={{
//               backgroundColor: '#ffffff60',
//               width: 325,
//               height: 325,
//               alignSelf: 'center',
//               borderBottomRightRadius: 150,
//               borderBottomLeftRadius: 150,
//               borderTopRightRadius: 150,
//               borderTopLeftRadius: 150,
//               top: 80,
//               alignItems: 'center',
//               position: 'absolute',
//             }}>
//             <View
//               style={{
//                 backgroundColor: '#ffffff',
//                 width: 251,
//                 height: 251,
//                 top: 25,
//                 borderBottomRightRadius: 150,
//                 borderBottomLeftRadius: 150,
//                 borderTopRightRadius: 150,
//                 borderTopLeftRadius: 150,
//               }}>
//               <Image
//                 style={{alignSelf: 'center', bottom: 15}}
//                 source={require('../images/f_pizza.png')}
//               />
//             </View>
//             {/* <View style={{top:55 ,backgroundColor:'#a0a8cc', width:50 ,
//                 alignItems:'center',
//                 borderBottomRightRadius:10
//             , borderBottomLeftRadius:10
//             , borderTopRightRadius:10
//             , borderTopLeftRadius:10,
//                 }}>
//                     <Text style={{color:'#6D6E9C'}}>12"</Text></View> */}
//           </View>
//         </LinearGradient>
//         <View
//           style={{
//             backgroundColor: '#FFFFFF60',
//             width: 320,
//             alignSelf: 'center',
//             top: 170,
//             borderBottomRightRadius: 20,
//             borderBottomLeftRadius: 20,
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//           }}>
//           <View style={{alignItems: 'center'}}>
//             <Text style={{color: '#6D6E9C', fontSize: 20, paddingTop: 10}}>

//               Choose upto <Text style={{fontWeight: 'bold'}}>7 Toppings</Text>
//             </Text>
//           </View>
//           <View style={{alignItems: 'center'}}>
//             <FlatList
//               keyExtractor={key => {
//                 return key.index;
//               }}
//               horizontal
//               data={toppingsobj}
//               renderItem={({item}) => {
//                 return (
//                   <View
//                     style={{
//                       backgroundColor: '#ffffff',
//                       marginLeft: 20,
//                       width: 230,
//                       flex: 1,
//                       flexDirection: 'row',
//                       justifyContent: 'space-around',
//                       padding: 5,
//                       borderBottomRightRadius: 20,
//                       borderBottomLeftRadius: 20,
//                       borderTopRightRadius: 20,
//                       borderTopLeftRadius: 20,
//                       margin: 10,
//                     }}>
//                     <View style={{width: 50, marginLeft: 10}}>
//                       <Image
//                         style={{width: 50, height: 50}}
//                         source={item.image}
//                       />
//                     </View>
//                     <View
//                       style={{
//                         width: 100,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                       }}>
//                       <Text
//                         style={{
//                           fontSize: 15,
//                           fontWeight: 'bold',
//                           color: '#6D6E9C',
//                         }}>
//                         {item.toppings}
//                       </Text>
//                       <Text style={{fontSize: 11, color: '#6d6e9c'}}>
//                         +$0.00
//                       </Text>
//                     </View>
//                     <View
//                       style={{
//                         backgroundColor: '#F4F3F9',
//                         width: 20,
//                         height: 20,
//                         borderBottomRightRadius: 20,
//                         borderBottomLeftRadius: 20,
//                         borderTopRightRadius: 20,
//                         borderTopLeftRadius: 20,
//                         alignSelf: 'center',
//                       }}>
//                       <TouchableOpacity></TouchableOpacity>
//                     </View>
//                   </View>
//                 );
//               }}
//             />
//           </View>
//         </View>
//         <LinearGradient
//           start={{x: 0, y: 1}}
//           end={{x: 1, y: 0}}
//           colors={['#F5313F', '#FFA360']}
//           style={{top: 185, height: 50}}>
//           <TouchableOpacity style={{color: '#ffffff', alignItems: 'center'}}>
//             <Text style={{top: 15, color: '#ffffff'}}>Next</Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </View>
//     </View>
//   );
// };

// export default Toppingfun;
