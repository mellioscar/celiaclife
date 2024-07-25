// src/screens/RecipeItem.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from '../utils/styles';

const RecipeItem = ({ item, viewableItems, category }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.Nombre === item.Nombre || viewableItem.item === item)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0, { duration: 500 }),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.8, { duration: 500 }),
        },
      ],
    };
  }, [viewableItems]);

  return (
    <Pressable>
      <Animated.View style={[styles.itemContainer, rStyle]}>
        <Text style={styles.title}>{item.Nombre || item}</Text>
        {category !== 'Bebidas' && item.Ingredientes && (
          <>
            <Text style={styles.subtitle}>Ingredientes:</Text>
            {item.Ingredientes.map((ingredient, index) => (
              <Text key={index} style={styles.description}>- {ingredient}</Text>
            ))}
          </>
        )}
        {category !== 'Bebidas' && item.Instrucciones && (
          <>
            <Text style={styles.subtitle}>Instrucciones:</Text>
            {item.Instrucciones.map((instruction, index) => (
              <Text key={index} style={styles.description}>- {instruction}</Text>
            ))}
          </>
        )}
      </Animated.View>
    </Pressable>
  );
};

export default RecipeItem;
