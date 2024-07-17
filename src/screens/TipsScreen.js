// src/screens/TipsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../utils/theme';

export default function TipsScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Consejos</Text>
      {/* Aquí podrías listar los consejos de los usuarios */}
    </View>
  );
}
