import axios from "axios";

const host = axios.create({
  baseURL: "http://localhost:5000/",
});

const authHost = axios.create({
  baseURL: "http://localhost:5000/",
});

const authInterceptors = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
};

authHost.interceptors.request.use(authInterceptors);

export { host, authHost };
