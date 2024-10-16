import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const loginUrl = `${API_URL}/auth/google`;

export const handleLogin = () => {
  window.location.href = loginUrl;
};

export const handleLoginCallback = (token: string) => {
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => localStorage.getItem("token");

export const isLoggedIn = () => !!getToken();

export const fetchUserInfo = async () => {
  const token = getToken();
  if (!token) {
    throw new Error('No token found');
  }
  
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  
  return response.data;
};