// src/utils/theme.js
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#2D6A4F', // Verde Oscuro
  secondary: '#95D5B2', // Verde Claro
  accent: '#00A6FB', // Azul Claro
  background: '#FAF5E4', // Beige
  highlight: '#FFD700', // Amarillo
  textPrimary: '#000000', // Negro para texto principal
  textSecondary: '#FFFFFF', // Blanco para texto secundario
};

export const fonts = {
  primary: 'JosefinSans-Regular',
  bold: 'JosefinSans-Bold',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fonts.bold,
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    fontFamily: fonts.primary,
  },
  text: {
    fontSize: 14,
    color: colors.textPrimary,
    fontFamily: fonts.primary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.textSecondary,
    fontFamily: fonts.primary,
    fontSize: 16,
  },
});
