// src/screens/BreakfastScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../utils/theme';

export default function BreakfastScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Recetas de Desayuno</Text>
      {/* Aquí podrías listar las recetas de desayuno */}
    </View>
  );
}
