import api from './api';

const getUsers = () => api.get('users/');

const addUser = (data) => api.post(`users/`, data);

const deleteUsers = (id) => api.delete(`users/${id}`);

const putUser = (id, data) => api.put(`users/${id}`, data);

export default {
  getUsers,
  addUser,
  deleteUsers,
  putUser,
}