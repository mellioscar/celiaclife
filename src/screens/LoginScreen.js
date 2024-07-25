import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, Text, Animated, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { globalStyles, colors } from '../utils/theme';
import styles from '../utils/styles';

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    // Ejecutar la animación de Fade In
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

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

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      const errorMessage = mapAuthError(error.message);
      Alert.alert('Error de inicio de sesión', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Animated.Image
        source={require('../../assets/images/Logo-CeliacLife.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Text style={globalStyles.title}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar Sesión"
          color={colors.primary}
          onPress={handleLogin}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Registrarse"
          color={colors.primary}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
