import { host, authHost } from "./http";
import jwt_decode from "jwt-decode";

export const signup = async (email, password) => {
  const { data } = await host.post("api/user/signup", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const checkAuth = async (localStorageToken) => {
  const { data } = await authHost.get("api/user/auth");

  return data.token === localStorageToken;
};
