import axios from 'axios';

// Cấu hình API cho từng service
export const userApi = axios.create({
  baseURL: 'http://192.168.30.84:5000/api',  // User Service
  headers: { 'Content-Type': 'application/json' }
});

export const orderApi = axios.create({
  baseURL: 'http://172.16.18.224:5002/api',  // Order Service
  headers: { 'Content-Type': 'application/json' }
});

export const productApi = axios.create({
  baseURL: 'http://192.168.29.193:5001/api',  // Product Service
  headers: { 'Content-Type': 'application/json' }
});

// Interceptor cho tất cả API
const attachToken = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

userApi.interceptors.request.use(attachToken);
orderApi.interceptors.request.use(attachToken);
productApi.interceptors.request.use(attachToken);

// ✅ THÊM export default (nếu muốn dùng import default)
export default userApi;