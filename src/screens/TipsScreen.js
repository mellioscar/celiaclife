// src/screens/TipsScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useGetTipsQuery } from '../services/firebaseApi';
import Animated, { useSharedValue } from 'react-native-reanimated';
import styles from '../utils/styles';
import TipItem from './TipItem';

const TipsScreen = () => {
  const { data: tips, error, isLoading } = useGetTipsQuery();
  const [visibleTips, setVisibleTips] = useState(10);
  const viewableItems = useSharedValue([]);
  const flatListRef = useRef(null);

  const handleLoadMore = () => {
    setVisibleTips((prevVisibleTips) => prevVisibleTips + 10);
  };

  const onViewableItemsChanged = ({ viewableItems: vItems }) => {
    viewableItems.value = vItems;
  };

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error al Cargar Consejos!</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={tips.slice(0, visibleTips)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TipItem item={item} index={index} viewableItems={viewableItems} />
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

export default TipsScreen;
