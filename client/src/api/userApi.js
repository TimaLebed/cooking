import jwt_decode from "jwt-decode";
import { host, authHost } from "./http";

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

export const checkAuth = async () => {
  const { data } = await authHost.get("api/user/auth");

  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};
