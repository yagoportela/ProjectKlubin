import axios from "axios";
import { getToken } from "./auth";

export const apiLogin = axios.create({
  baseURL: "http://localhost:5000"
});

export const apiUser = axios.create({
  baseURL: "http://localhost:5004"
});

export const apiUsers = axios.create({
  baseURL: "http://localhost:5003"
});

apiLogin.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiUser.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, 
error => console.log(error));
