// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { globalStyles, colors } from '../utils/theme';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../assets/images/Logo-CeliacLife.png')}
        style={styles.logo}
      />
      <Text style={globalStyles.title}>Consejo Diario</Text>
      {/* Aquí podrías renderizar el consejo diario */}
      <TextInput style={styles.searchInput} placeholder="Buscar tiendas sin TACC" />
      <View style={styles.buttonContainer}>
        <Button title="Buscar" color={colors.primary} onPress={() => {}} />
      </View>
    </View>
  );
}

// Estilos específicos para la pantalla de inicio
const styles = StyleSheet.create({
  logo: {
    width: 270, // Ancho fijo de 270px
    height: 270, // Altura fija de 270px
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 5, // Radio de borde de 5px
  },
  searchInput: {
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    width: '100%', // Hacer que el campo de búsqueda ocupe el 100% del ancho del contenedor
  },
  buttonContainer: {
    marginTop: 16,
    width: '100%', // Hacer que el contenedor del botón ocupe el 100% del ancho del contenedor
  },
});
