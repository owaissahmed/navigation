import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signup from './screens/Signup';
import Small from './screens/Small';
import DrawerScreen from './screens/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './screens/customDrawer';
import Large from './screens/Large';
import AdminSetting from './screens/AdminSetting';
import Login from './screens/Login';
// import Home from './screens/Topping';
import Home from './screens/Topping'
import Order from './screens/Check';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// import NewScreen from './screens/New';

function Tabapp() {
  return (
    <Tab.Navigator initialRouteName="AdminSetting">
    <Tab.Screen
      name="Topping"
      component={Home}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="Check"
      component={Order}
      options={{headerShown: false}}
    />
      <Tab.Screen
        name="AdminSetting"
        component={AdminSetting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="drawer"
          options={{drawerType: 'back', headerShown: false}}
          component={DrawerScreen}
        />
        <Stack.Screen
          name="AdminSetting"
          options={{drawerType: 'back', headerShown: false}}
          component={Tabapp}
        />
        <Stack.Screen
          name="Signup"
          options={{drawerType: 'back', headerShown: false}}
          component={Signup}
        />
        <Stack.Screen
          name="Login"
          options={{drawerType: 'back', headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Example"
          options={{drawerType: 'back'}}
          component={Small}
        />
        <Stack.Screen
          name="Large"
          options={{drawerType: 'back'}}
          component={Large}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
