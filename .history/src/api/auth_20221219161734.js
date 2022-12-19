import api from './api';

const authUser = async (values, path) => {
  const { data } = await api.post(`/api/auth/${path}`, values);
  return data;
};
const verifyUser = async () => {
  const { data } = await api.get('/api/auth');
  return data;
};

export { authUser,  };
