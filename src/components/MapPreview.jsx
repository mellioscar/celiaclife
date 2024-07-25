//src/components/MapPreview.jsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MapPreview = ({ location }) => {
  const mapPreviewUrl = location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.coords.latitude},${location.coords.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.coords.latitude},${location.coords.longitude}&key=YOUR_API_KEY`
    : '';

  return (
    <View style={styles.mapPreview}>
      {location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
      ) : (
        <Text>No location chosen yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200, // Puedes ajustar este valor según tus necesidades
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});

export default MapPreview;
