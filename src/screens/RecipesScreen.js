// src/screens/RecipesScreen.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { globalStyles, colors } from '../utils/theme';
import { useNavigation } from '@react-navigation/native';

export default function RecipesScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Ver Recetas</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Recetas', { screen: 'Desayuno' })}
        >
          <Text style={styles.buttonText}>Desayuno</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Recetas', { screen: 'Almuerzo' })}
        >
          <Text style={styles.buttonText}>Almuerzo</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Recetas', { screen: 'Merienda' })}
        >
          <Text style={styles.buttonText}>Merienda</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Recetas', { screen: 'Cena' })}
        >
          <Text style={styles.buttonText}>Cena</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Estilos específicos para la pantalla de recetas
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '45%',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textSecondary,
    fontFamily: 'JosefinSans-Bold',
    fontSize: 16,
  },
});
