// src/screens/LunchScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../utils/theme';

export default function LunchScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Recetas de Almuerzo</Text>
      {/* Aquí podrías listar las recetas de almuerzo */}
    </View>
  );
}
