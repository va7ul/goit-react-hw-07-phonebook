import axios from 'axios';

axios.defaults.baseURL = 'https://6519986e818c4e98ac608cb9.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const newContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

export const removeContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
