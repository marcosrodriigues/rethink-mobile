import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { Platform } from 'react-native';

if(Platform.OS === 'android') { // only android needs polyfill
    require('intl'); // import intl object
    require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
  }

export default function App() {
  return (
      <AuthProvider>
        <NavigationContainer>
            <Routes />
        </NavigationContainer>    
      </AuthProvider>
  );
}