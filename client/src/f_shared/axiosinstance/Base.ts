import axios, { AxiosInstance } from "axios";
import * as Const from "../constrant";

export const Base: AxiosInstance = axios.create({
  baseURL: Const.isNode_Dev
    ? "/api"
    : `${process.env.NEXT_PUBLIC_RESOURCE_URL}/api`,
  timeout: 2000,
});

Base.interceptors.response.use((config) => {
  const { 'access-token': accessToken, 'refresh-token': refreshToken } = config.headers;
  if(accessToken) {
    console.log('accessToken', accessToken);
  }
  if(refreshToken) {
    console.log('refreshToken', refreshToken);
  }
  return config;
});
