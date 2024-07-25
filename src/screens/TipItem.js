// src/screens/TipItem.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import styles from '../utils/styles';

const TipItem = ({ item, viewableItems }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((vItem) => vItem.isViewable)
        .find((viewableItem) => viewableItem.item.consejo === item.consejo)
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
        <Text style={styles.title}>{item.consejo}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default TipItem;
