// /App.js
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
import store from './src/redux/store';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppRegistry } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'JosefinSans-Regular': JosefinSans_400Regular,
    'JosefinSans-Bold': JosefinSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </Provider>
  );
}

AppRegistry.registerComponent('main', () => App);
