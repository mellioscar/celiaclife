// src/screens/RecipeCategory.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { globalStyles, colors } from '../utils/theme';

const RecipeCategory = () => {
  const route = useRoute();
  const { category } = route.params || {};
  const navigation = useNavigation();

  // Definir las subcategorías según la categoría principal
  const subcategories = {
    'Desayunos': ['Dulce', 'Salado'],
    'Meriendas': ['Dulce', 'Salado'],
    'Almuerzos': ['Carnes', 'Pastas', 'Sopas'],
    'Cenas': ['Carnes', 'Pastas', 'Sopas'],
    'Bebidas': ['No Alcoholicas', 'Alcoholicas']
  };

  const categoryMapping = {
    'Desayunos': 'Desayuno o Merienda',
    'Meriendas': 'Desayuno o Merienda',
    'Almuerzos': 'Almuerzo o Cena',
    'Cenas': 'Almuerzo o Cena',
    'Bebidas': 'Bebidas'
  };

  const mainCategory = categoryMapping[category];

  // Verificar que la categoría exista en subcategories
  if (!subcategories[category]) {
    return (
      <View style={globalStyles.container}>
        <Text style={styles.errorText}>Categoría no encontrada.</Text>
      </View>
    );
  }

  const handlePress = (subcategory) => {
    navigation.navigate('RecipeList', { category: mainCategory, subcategory });
  };

  return (
    <View style={globalStyles.container}>
      {subcategories[category].map((subcategory) => (
        <Pressable
          key={subcategory}
          style={styles.button}
          onPress={() => handlePress(subcategory)}
        >
          <Text style={styles.buttonText}>{subcategory}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textSecondary,
    fontSize: 18,
    fontFamily: 'JosefinSans-Bold',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontFamily: 'JosefinSans-Bold',
  },
});

export default RecipeCategory;
