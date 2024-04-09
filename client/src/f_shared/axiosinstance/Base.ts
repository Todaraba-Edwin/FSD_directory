import axios from "axios";

export const Base = axios.create({
  baseURL: "http://localhost:3003",
  timeout: 2000,
});
