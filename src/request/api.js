import axios from "axios";

//mandar con credenciales
axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "http://localhost:3001/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
