import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import Small from './screens/Small';
import DrawerScreen from './sidescreens/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './screens/customDrawer';
import Large from './screens/Large';
import Thinsize from './screens/Thin';
import Thicksize from './screens/Thick';
import Extratopping from './screens/Topping';
import Order from './screens/Check';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="drawer">
        <Drawer.Screen
          name="drawer"
          options={{drawerType: 'back'}}
          component={DrawerScreen}
        />
        <Drawer.Screen
          name="Example"
          options={{headerShown: false, drawerType: 'back'}}
          component={Small}
        />
        <Drawer.Screen
          name="Splash"
          options={{headerShown: false, drawerType: 'back'}}
          component={Splash}
        />
        <Drawer.Screen
          name="Large"
          options={{headerShown: false, drawerType: 'back'}}
          component={Large}
        />
        <Drawer.Screen
          name="Thin"
          component={Thinsize}
          options={{headerShown: false, drawerType: 'back'}}
        />
        <Drawer.Screen
          name="Thick"
          options={{headerShown: false, drawerType: 'back'}}
          component={Thicksize}
        />
        <Drawer.Screen
          name="Topping"
          options={{headerShown: false, drawerType: 'back'}}
          component={Extratopping}
        />
        <Drawer.Screen
          name="Check"
          options={{headerShown: false, drawerType: 'back'}}
          component={Order}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
