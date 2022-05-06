export const setLocalToken = (value: string): void => {
  return localStorage.setItem('home_user_token', value);
};

export const getLocalToken = (): string | null => {
  return localStorage.getItem('home_user_token');
};

export const removeLocalToken = (): void => {
  return localStorage.removeItem('home_user_token');
};

export const setUserRole = (value: string): void => {
  return localStorage.setItem('home_user_role', value);
};

export const getUserRole = (): string | null => {
  return localStorage.getItem('home_user_role');
};

export const removeUserRole = (): void => {
  return localStorage.removeItem('home_user_role');
};

export const setUserId = (value: string): void => {
  return localStorage.setItem('home_user_id', value);
};

export const getUserId = (): string | null => {
  return localStorage.getItem('home_user_id');
};

export const removeUserId = (): void => {
  return localStorage.removeItem('home_user_id');
};
