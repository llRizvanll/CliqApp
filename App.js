/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from './navigations/AppNavigator';
import { ClothesProvider } from './src/context';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <ClothesProvider>
      <AppNavigator />
    </ClothesProvider>
  );
};

export default App;