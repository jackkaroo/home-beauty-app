export const API_URL = 'http://localhost:3000';

export const setLocalToken = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
export const getLocalToken = (key: string) => {
  return localStorage.getItem(key);
};
export const removeLocalToken = (key: string) => {
  return localStorage.removeItem(key);
};
