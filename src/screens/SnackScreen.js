// src/screens/SnackScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../utils/theme';

export default function SnackScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Recetas de Merienda</Text>
      {/* Aquí podrías listar las recetas de merienda */}
    </View>
  );
}
