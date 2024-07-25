// src/navigation/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { StyleSheet, Text } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import RecipeCategory from '../screens/RecipeCategory';
import RecipeList from '../screens/RecipeList';
import TipsScreen from '../screens/TipsScreen';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MapCeliacScreen from '../screens/MapCeliacScreen';
import { colors } from '../utils/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function RecipesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecipesMain" component={RecipesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RecipeCategory" component={RecipeCategory} options={{ headerShown: true, title: 'Categorías' }} />
      <Stack.Screen name="RecipeList" component={RecipeList} options={{ headerShown: true, title: 'Lista de Recetas' }} />
    </Stack.Navigator>
  );
}

function TipsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TipsMain" component={TipsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserMain" component={UserScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function MapCeliacStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapCeliacMain" component={MapCeliacScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function TabIcon({ name, focused }) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(focused ? 1.5 : 1) }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={name} size={30} color={focused ? colors.primary : 'gray'} />
    </Animated.View>
  );
}

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'INICIO') {
            iconName = 'home';
          } else if (route.name === 'RECETAS') {
            iconName = 'fast-food';
          } else if (route.name === 'CONSEJOS') {
            iconName = 'bulb';
          } else if (route.name === 'USUARIO') {
            iconName = 'person';
          } else if (route.name === 'MAPA') {
            iconName = 'map';
          }

          return <TabIcon name={iconName} focused={focused} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let label;

          if (route.name === 'INICIO') {
            label = 'Inicio';
          } else if (route.name === 'RECETAS') {
            label = 'Recetas';
          } else if (route.name === 'CONSEJOS') {
            label = 'Consejos';
          } else if (route.name === 'USUARIO') {
            label = 'Usuario';
          } else if (route.name === 'MAPA') {
            label = 'Mapa';
          }

          return <Text style={{ color, fontSize: 15 }}>{label}</Text>;
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
      <Tab.Screen name="INICIO" component={HomeStack} />
      <Tab.Screen name="MAPA" component={MapCeliacStack} />
      <Tab.Screen name="RECETAS" component={RecipesStack} />
      <Tab.Screen name="CONSEJOS" component={TipsStack} />
      <Tab.Screen name="USUARIO" component={UserStack} />
    </Tab.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 5,
    borderRadius: 15,
    height: 65,
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
