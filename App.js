import React from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native'
import {Text, View} from 'react-native';
import AppNavigator from './src/AppNavigator';

const main = () => {
  return <AppNavigator />;
};

export default main;
