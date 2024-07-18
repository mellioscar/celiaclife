// src/screens/TipsScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useGetTipsQuery } from '../services/firebaseApi';
import styles from '../utils/styles';

const TipsScreen = () => {
  const { data: tips, error, isLoading } = useGetTipsQuery();
  const [visibleTips, setVisibleTips] = useState(10);

  const handleLoadMore = () => {
    setVisibleTips((prevVisibleTips) => prevVisibleTips + 50);
  };

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error al Cargar Consejos!</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={tips.slice(0, visibleTips)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.consejo}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>
          </View>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 80 }} // Espacio para TabNavigator
      />
    </View>
  );
};

export default TipsScreen;
