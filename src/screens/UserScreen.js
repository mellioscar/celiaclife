import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { signIn } from '../services/authService';
import { globalStyles, colors } from '../utils/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../utils/styles';
import { baseUrl } from '../databases/realtimeDatabase';
import { CommonActions } from '@react-navigation/native';
import { useUpdateUserProfileMutation } from '../services/firebaseApi';

const UserScreen = ({ navigation }) => {
  const { user, updateUser, logout } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [surname, setSurname] = useState(user?.surname || '');
  const [birthDate, setBirthDate] = useState(user?.birthDate || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [password, setPassword] = useState('');

  const [updateUserProfile] = useUpdateUserProfileMutation();

  useEffect(() => {
    if (!user) return; // Asegurarse de que el usuario esté definido

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${baseUrl}/users/${user.email.replace('.', '_')}.json`);
        const data = await response.json();
        if (data) {
          setName(data.name || '');
          setSurname(data.surname || '');
          setBirthDate(data.birthDate || '');
          setGender(data.gender || '');
        }
      } catch (error) {
        Alert.alert('Error al cargar datos', error.message);
      }
    };

    fetchUserData();
  }, [user]);

  const handleSave = async () => {
    if (!password) {
      Alert.alert('Autenticación requerida', 'Por favor, introduce tu contraseña para autenticarte.');
      return;
    }

    try {
      const result = await signIn(user.email, password);
      const idToken = result.idToken;

      const updatedUser = { name, surname, birthDate, gender };
      updateUser(updatedUser);
      
      await updateUserProfile({ email: user.email, profileData: updatedUser });
      Alert.alert('Perfil actualizado con éxito');
    } catch (error) {
      const errorMessage = mapAuthError(error.message);
      Alert.alert('Error al actualizar el perfil', errorMessage);
    }
  };

  const mapAuthError = (errorCode) => {
    switch (errorCode) {
      case 'INVALID_LOGIN_CREDENTIALS':
        return 'Credenciales de inicio de sesión inválidas';
      case 'EMAIL_NOT_FOUND':
        return 'Correo electrónico no encontrado';
      case 'INVALID_PASSWORD':
        return 'Contraseña incorrecta';
      case 'INVALID_EMAIL':
        return 'Email incorrecto';
      case 'USER_DISABLED':
        return 'Usuario deshabilitado';
      default:
        return 'Error desconocido. Por favor, intenta de nuevo.';
    }
  };

  const handleLogout = async () => {
    await logout();
    setName('');
    setSurname('');
    setBirthDate('');
    setGender('');
    setPassword('');

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],
      })
    );
  };

  if (!user) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <Text style={globalStyles.title}>Perfil de Usuario</Text>

      <Icon name="person-circle-outline" size={200} color={colors.primary} style={styles.profileIcon} />
      
      <Text style={globalStyles.subtitle2}>Correo Electrónico: {user?.email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={surname}
        onChangeText={setSurname}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Fecha de Nacimiento"
          value={birthDate}
          onChangeText={setBirthDate}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Género"
          value={gender}
          onChangeText={setGender}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>GUARDAR CAMBIOS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserScreen;
