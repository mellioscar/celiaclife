// src/screens/HomeScreen.js
import React, { useRef, useEffect } from 'react';
import { Text, Animated, ScrollView } from 'react-native';
import { globalStyles } from '../utils/theme';
import styles from '../utils/styles';

export default function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Ejecutar la animación de Fade In
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={[globalStyles.container, { paddingBottom: 80 }]}>
      <Animated.Image
        source={require('../../assets/images/Logo-CeliacLife.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Text style={globalStyles.title}>CeliacLife</Text>
      <Text style={[globalStyles.subtitle2, { textAlign: 'justify' }]}>
        La Celiaquía es una enfermedad autoinmune en la que el gluten (trigo, avena, cebada y centeno) daña el intestino delgado. Pero vivir con celiaquía no tiene por qué ser complicado. Con CeliacLife, tu aliado diario, encontrarás tiendas con productos Sin TACC, recetas deliciosas y consejos prácticos para una vida plena y saludable.
      </Text>
      <Text style={[globalStyles.subtitle2, { textAlign: 'justify' }]}>
        Transforma tu día a día, descubre nuevas opciones y vive sin límites. ¡Únete a CeliacLife y lleva una vida sin gluten con estilo y facilidad!
      </Text>
    </ScrollView>
  );
}
