// src/navigation/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import TipsScreen from '../screens/TipsScreen';
import UserScreen from '../screens/UserScreen';

// Crear navegadores de Tabs y Stack
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Definir el Stack Navigator para la pantalla de inicio
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      {/* Aquí se pueden agregar más pantallas al stack de Home */}
    </Stack.Navigator>
  );
}

// Definir el Stack Navigator para la pantalla de recetas
function RecipesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recetas" component={RecipesScreen} />
      {/* Aquí se pueden agregar más pantallas al stack de Recipes */}
    </Stack.Navigator>
  );
}

// Definir el Stack Navigator para la pantalla de consejos
function TipsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Consejos" component={TipsScreen} />
      {/* Aquí se pueden agregar más pantallas al stack de Tips */}
    </Stack.Navigator>
  );
}

// Definir el Stack Navigator para la pantalla de usuario
function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Usuario" component={UserScreen} />
      {/* Aquí se pueden agregar más pantallas al stack de User */}
    </Stack.Navigator>
  );
}

// Definir el componente de navegación principal
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeStack} />
        <Tab.Screen name="Recetas" component={RecipesStack} />
        <Tab.Screen name="Consejos" component={TipsStack} />
        <Tab.Screen name="Usuario" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
