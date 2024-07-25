// src/screens/RecipesScreen.js
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { globalStyles, colors } from '../utils/theme';
import { useNavigation } from '@react-navigation/native';

export default function RecipesScreen() {
  const navigation = useNavigation();

  const handlePress = (category) => {
    navigation.navigate('RecipeCategory', { category });
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => handlePress('Desayunos')}
        >
          <Image source={require('../../assets/images/icon-desayuno.png')} style={styles.icon} />
          <Text style={styles.buttonText}>D E S A Y U N O S</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handlePress('Almuerzos')}
        >
          <Image source={require('../../assets/images/icon-almuerzo.png')} style={styles.icon} />
          <Text style={styles.buttonText}>A L M U E R Z O S</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handlePress('Meriendas')}
        >
          <Image source={require('../../assets/images/icon-merienda.png')} style={styles.icon} />
          <Text style={styles.buttonText}>M E R I E N D A S</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handlePress('Cenas')}
        >
          <Image source={require('../../assets/images/icon-cena.png')} style={styles.icon} />
          <Text style={styles.buttonText}>C E N A S</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handlePress('Bebidas')}
        >
          <Image source={require('../../assets/images/icon-bebidas.png')} style={styles.icon} />
          <Text style={styles.buttonText}>B E B I D A S</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Estilos específicos para la pantalla de recetas
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 75,
    height: 75,
    marginRight: 15,
    marginLeft: 15,
  },
  buttonText: {
    color: colors.textSecondary,
    fontFamily: 'JosefinSans-Bold',
    fontSize: 22,
  },
});
