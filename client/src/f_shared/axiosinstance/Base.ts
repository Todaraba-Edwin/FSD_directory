import axios, { AxiosInstance } from "axios";
import * as Const from "../constrant";

export const Base:AxiosInstance = axios.create({
  baseURL: Const.isNode_Dev ? "/api" : `${process.env.NEXT_PUBLIC_RESOURCE_URL}/api`,
  timeout: 2000,
});
