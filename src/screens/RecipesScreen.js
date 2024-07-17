// src/screens/RecipesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../utils/theme';

export default function RecipesScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Recetas</Text>
      {/* Aquí podrías listar las recetas */}
    </View>
  );
}
