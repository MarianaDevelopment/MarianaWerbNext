import axios from "axios";

//mandar con credenciales
axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "https://api.mariana-re.com/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
