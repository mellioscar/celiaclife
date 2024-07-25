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
  selectedItemContainer: {
    elevation: 10,
    backgroundColor: colors.accent,
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
    textAlign: 'justify',
  },
  logo: {
    width: 270,
    height: 270,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 70,
  },
  searchInput: {
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 1,
    padding: 5,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  logoutButton: {
    backgroundColor: colors.error,
  },
  buttonText: {
    color: colors.textSecondary,
    textAlign: 'center',
    //fontFamily: 'JosefinSans-Regular',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 5,
    alignSelf: 'center',
  },
  profileIcon: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  imageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageButton: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
