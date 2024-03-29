import { API_URL } from 'services/api/base';

export const authorizeUser = async (data: any): Promise<any> => {
  const url = `${API_URL}/login`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const createUser = async (data: any): Promise<any> => {
  const url = `${API_URL}/register`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
