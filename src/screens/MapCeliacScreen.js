// src/screens/MapCeliacScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapViewComponent from '../components/MapViewComponent';
import { globalStyles } from '../utils/theme';
import styles from '../utils/styles';
import { useGetStoresQuery } from '../services/firebaseApi';

const MapCeliacScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { data: stores, error, isLoading } = useGetStoresQuery();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso para acceder a la ubicación denegado');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const filteredStores = stores?.filter(store => 
    store.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStore = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.nombre}</Text>
      <Text style={styles.description}>{item.descripcion}</Text>
      <Text style={styles.description}>{item.direccion}</Text>
    </View>
  );

  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <View style={localStyles.fixedHeader}>
        <Text style={globalStyles.title}>Tiendas con Productos Sin TACC</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar tiendas..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MapViewComponent location={location} stores={filteredStores} />
        {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
      </View>
      <FlatList
        data={filteredStores}
        renderItem={renderStore}
        keyExtractor={(item) => item.nombre}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!isLoading && <Text>No se encontraron tiendas.</Text>}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  fixedHeader: {
    marginBottom: 10,
  },
});

export default MapCeliacScreen;
