import axios, { AxiosInstance } from "axios";

const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://alex-associates.onrender.com";

const getToken = (): string | null => {
  return localStorage.getItem("token");
};
const api: AxiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
