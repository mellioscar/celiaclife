// App.js
import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { useFonts, JosefinSans_400Regular, JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';
import store from './src/redux/store';
import Navigation from './src/navigation/Navigation';

export default function App() {
  // Cargar las fuentes utilizando useFonts de @expo-google-fonts/josefin-sans
  const [fontsLoaded] = useFonts({
    'JosefinSans-Regular': JosefinSans_400Regular,
    'JosefinSans-Bold': JosefinSans_700Bold,
  });

  // Mostrar pantalla de carga mientras se cargan las fuentes
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    // Proveer la tienda de Redux a la aplicación
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
