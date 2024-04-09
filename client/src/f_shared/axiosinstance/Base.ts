import axios from "axios";

export const Base = axios.create({
  baseURL: "http://localhost:3003/api",
  timeout: 2000,
});
