import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Categories API
export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  create: (data) => api.post('/categories', data),
  update: (id, data) => api.put(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`),
};

// Menu Items API
export const menuItemsAPI = {
  getAll: (locationId = null) => {
    const params = locationId ? { locationId } : {};
    return api.get('/menu-items', { params });
  },
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key]) {
        formData.append('image', data[key]);
      } else if (Array.isArray(data[key])) {
        formData.append(key, data[key].join(','));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.post('/menu-items', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'image' && data[key]) {
        formData.append('image', data[key]);
      } else if (Array.isArray(data[key])) {
        formData.append(key, data[key].join(','));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/menu-items/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  delete: (id) => api.delete(`/menu-items/${id}`),
};

// Locations API
export const locationsAPI = {
  getAll: () => api.get('/locations'),
  create: (data) => api.post('/locations', data),
  update: (id, data) => api.put(`/locations/${id}`, data),
  delete: (id) => api.delete(`/locations/${id}`),
};

// Customization Options API
export const customizationAPI = {
  getAll: () => api.get('/customization-options'),
  create: (data) => api.post('/customization-options', data),
  update: (id, data) => api.put(`/customization-options/${id}`, data),
  delete: (id) => api.delete(`/customization-options/${id}`),
};

export default api;