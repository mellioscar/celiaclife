// src/screens/UserScreen.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { globalStyles } from '../utils/theme';

export default function UserScreen() {
  const user = useSelector((state) => state.user);

  if (!user || !user.name) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Cargando usuario...</Text>
      </View>
    );
  }

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
