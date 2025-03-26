const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const fetchDisasters = async () => {
  const response = await fetch(`${API_BASE_URL}/disasters`);
  if (!response.ok) throw new Error('Failed to fetch disasters');
  return await response.json();
};

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error('Login failed');
  return await response.json();
};