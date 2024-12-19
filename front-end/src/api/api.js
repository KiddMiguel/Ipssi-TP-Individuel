import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log('API_BASE_URL', API_BASE_URL);
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// User API calls
export const registerUser = (userData) => api.post('/users/register', userData);
export const loginUser = (userData) => api.post('/users/login', userData);
export const getCurrentUser = () => api.get('/users/me');

// Annonce API calls
export const getAllAnnonces = () => api.get('/annonces');
export const getUserAnnonces = (userId) => api.get(`/annonces/user/${userId}`);
export const createAnnonce = (annonceData) => api.post('/annonces/create', annonceData);
export const updateAnnonce = (id, annonceData) => api.put(`/annonces/${id}`, annonceData);
export const deleteAnnonce = (id) => api.delete(`/annonces/${id}`);

export default api;
