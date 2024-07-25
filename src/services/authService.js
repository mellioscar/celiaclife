// src/services/authService.js
import { apiKey, baseAuthUrl } from '../databases/users';

export const signUp = async (email, password) => {
  const url = `${baseAuthUrl}/accounts:signUp?key=${apiKey}`;
  
  const payload = {
    email,
    password,
    returnSecureToken: true
  };
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw data.error;
  }
};

export const signIn = async (email, password) => {
  const url = `${baseAuthUrl}/accounts:signInWithPassword?key=${apiKey}`;
  
  const payload = {
    email,
    password,
    returnSecureToken: true
  };
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw data.error;
  }
};
