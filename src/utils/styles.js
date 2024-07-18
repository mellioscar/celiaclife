// src/utils/styles.js
import { StyleSheet } from 'react-native';
import { colors, fonts } from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  itemContainer: {
    backgroundColor: colors.primary,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: colors.textSecondary,
    fontFamily: fonts.bold,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: fonts.primary,
  },
});
