export const API_URL = 'http://localhost:3000';

export const setLocalToken = (key: string, value: string): void => {
  return localStorage.setItem(key, value);
};

export const getLocalToken = (key: string): string => {
  return localStorage.getItem(key);
};

export const removeLocalToken = (key: string): void => {
  return localStorage.removeItem(key);
};
