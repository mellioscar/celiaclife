// src/screens/DinnerScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../utils/theme';

export default function DinnerScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Recetas de Cena</Text>
      {/* Aquí podrías listar las recetas de cena */}
    </View>
  );
}
