// src/utils/theme.js
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#2D6A4F',
  secondary: '#6BCB77',
  terciary: '#375C51',
  accent: '#87B8E4',
  background: '#D2D3B5',
  highlight: '#EFCB68',
  textPrimary: '#000000',
  textSecondary: '#FFFFFF',
  error: '#B00020',
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
    fontFamily: 'JosefinSans-Bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    fontFamily: 'JosefinSans-Regular',
  },
  subtitle2: {
    fontSize: 20,
    color: colors.terciary,
    fontFamily: 'JosefinSans-Regular',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: colors.textPrimary,
    fontFamily: 'JosefinSans-Regular',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.textSecondary,
    fontFamily: 'JosefinSans-Regular',
    fontSize: 19,
  },
});
