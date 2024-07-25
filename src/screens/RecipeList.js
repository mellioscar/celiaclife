// src/screens/RecipeList.js
import React, { useState, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGetRecipesByCategoryQuery } from '../services/firebaseApi';
import { useSharedValue } from 'react-native-reanimated';
import styles from '../utils/styles';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const route = useRoute();
  const { category, subcategory } = route.params || {};
  const { data, error, isLoading } = useGetRecipesByCategoryQuery({ category, subcategory });
  const [visibleRecipes, setVisibleRecipes] = useState(10);
  const viewableItems = useSharedValue([]);
  const flatListRef = useRef(null);

  const handleLoadMore = () => {
    setVisibleRecipes((prevVisibleRecipes) => prevVisibleRecipes + 10);
  };

  const onViewableItemsChanged = ({ viewableItems: vItems }) => {
    viewableItems.value = vItems;
  };

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error al cargar recetas!</Text>;
  if (!data || data.length === 0) return <Text>No hay recetas disponibles</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data.slice(0, visibleRecipes)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <RecipeItem item={item} index={index} viewableItems={viewableItems} category={category} />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 80 }} // Espacio para TabNavigator
      />
    </View>
  );
};

export default RecipeList;
