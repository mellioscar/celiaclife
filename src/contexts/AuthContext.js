// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { signIn, signUp } from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (email, password) => {
    try {
      const userData = await signUp(email, password);
      setUser({ ...userData, email });
      await AsyncStorage.setItem('userToken', userData.idToken); // Almacena el token
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const userData = await signIn(email, password);
      setUser({ ...userData, email });
      await AsyncStorage.setItem('userToken', userData.idToken); // Almacena el token
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken'); // Elimina el token
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const updateUser = (updatedUser) => {
    setUser({ ...user, ...updatedUser });
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
