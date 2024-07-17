// src/screens/UserScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { globalStyles } from '../utils/theme';

export default function UserScreen() {
  const user = useSelector((state) => state.user);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Perfil de Usuario</Text>
      <Text style={globalStyles.text}>Nombre: {user.name}</Text>
      <Text style={globalStyles.text}>Fecha de Nacimiento: {user.birthdate}</Text>
      <Text style={globalStyles.text}>Email: {user.email}</Text>
      {/* Aquí podrías agregar un formulario para actualizar los datos del usuario */}
    </View>
  );
}
