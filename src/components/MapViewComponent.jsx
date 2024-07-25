//src/components/MapViewComponent.jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = ({ location, stores }) => {
  if (!location) {
    return <View style={styles.loadingContainer}><Text>Cargando mapa...</Text></View>;
  }

  const { latitude, longitude } = location.coords;

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title={"Tu Ubicación"}
          description={"Estás aquí"}
        />
        {stores?.map((store, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: store.geolocalizacion.latitud, longitude: store.geolocalizacion.longitud }}
            title={store.nombre}
            description={store.descripcion}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 5,
  },
  map: {
    height: 200,
    width: '100%',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default MapViewComponent;
