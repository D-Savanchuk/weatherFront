import api from './api';

const authUser = async (values, path) => {
  const { data } = await api.post(`/api/auth/${path}`, values);
  return data;
};

export { authUser  };
