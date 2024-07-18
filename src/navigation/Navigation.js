// src/navigation/Navigation.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import TipsScreen from '../screens/TipsScreen';
import UserScreen from '../screens/UserScreen';
import BreakfastScreen from '../screens/BreakfastScreen';
import LunchScreen from '../screens/LunchScreen';
import SnackScreen from '../screens/SnackScreen';
import DinnerScreen from '../screens/DinnerScreen';
import { colors } from '../utils/theme';

// Crear navegadores de Tabs y Stack
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Definir el Stack Navigator para la pantalla de inicio
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

// Definir el Stack Navigator para la pantalla de recetas
function RecipesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="RecipesMain" 
        component={RecipesScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="Desayuno" component={BreakfastScreen} />
      <Stack.Screen name="Almuerzo" component={LunchScreen} />
      <Stack.Screen name="Merienda" component={SnackScreen} />
      <Stack.Screen name="Cena" component={DinnerScreen} />
    </Stack.Navigator>
  );
}

// Definir el Stack Navigator para la pantalla de consejos
function TipsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TipsMain" 
        component={TipsScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

// Definir el Stack Navigator para la pantalla de usuario
function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="UserMain" 
        component={UserScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

// Definir el componente de icono de pestañas con animación
function TabIcon({ name, focused }) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(focused ? 1.4 : 1) }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={name} size={29} color={focused ? colors.primary : 'gray'} />
    </Animated.View>
  );
}

// Definir el componente de navegación principal
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Recetas') {
              iconName = 'fast-food';
            } else if (route.name === 'Consejos') {
              iconName = 'bulb';
            } else if (route.name === 'Usuario') {
              iconName = 'person';
            }

            return <TabIcon name={iconName} focused={focused} />;
          },
          tabBarLabel: ({ focused }) => {
            let label;

            if (route.name === 'Inicio' && focused) {
              label = 'Inicio';
            } else if (route.name === 'Recetas' && focused) {
              label = 'Recetas';
            } else if (route.name === 'Consejos' && focused) {
              label = 'Consejos';
            } else if (route.name === 'Usuario' && focused) {
              label = 'Usuario';
            }

            return focused ? <Text style={styles.label}>{label}</Text> : null;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.textSecondary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen name="Inicio" component={HomeStack} />
        <Tab.Screen name="Recetas" component={RecipesStack} />
        <Tab.Screen name="Consejos" component={TipsStack} />
        <Tab.Screen name="Usuario" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Estilos para el contenedor y la barra de pestañas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 5,
    borderRadius: 15,
    height: 70,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.primary,
  },
});
