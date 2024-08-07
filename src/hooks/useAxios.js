import axios from 'axios';

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  return { axiosInstance };
};

export default useAxios;