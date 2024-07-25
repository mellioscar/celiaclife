// src/screens/SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import * as yup from 'yup';
import styles from '../utils/styles';
import { globalStyles, colors } from '../utils/theme';

// Esquema de validación de yup
const validationSchema = yup.object().shape({
  email: yup.string().email('Correo electrónico no válido').required('El correo electrónico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Debe confirmar la contraseña'),
});

const SignupScreen = ({ navigation }) => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      await validationSchema.validate({ email, password, confirmPassword }, { abortEarly: false });
      setLoading(true);
      setError(''); // Limpiar error antes de intentar el registro
      await register(email, password);
      setLoading(false);
      navigation.navigate('Login');
    } catch (err) {
      setLoading(false);
      if (err.name === 'ValidationError') {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        handleFirebaseError(err);
      }
    }
  };

  const handleFirebaseError = (err) => {
    switch (err.message) {
      case 'INVALID_EMAIL':
        setError('El correo electrónico no es válido.');
        break;
      case 'EMAIL_EXISTS':
        setError('El correo electrónico ya está en uso.');
        break;
      case 'WEAK_PASSWORD':
        setError('La contraseña es demasiado débil.');
        break;
      default:
        setError('Error al registrar el usuario.');
        break;
    }
  };

  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../../assets/images/Logo-CeliacLife.png')}
        style={styles.logo}
      />
      <Text style={globalStyles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
      <View style={styles.buttonContainer}>
        <Button title="Registrar" onPress={handleSignup} color={colors.primary} />
      </View>
      {loading && <Text>Cargando...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <Button title="Ir a Iniciar Sesión" onPress={() => navigation.navigate('Login')} color={colors.secondary} />
      </View>
    </View>
  );
};

export default SignupScreen;
