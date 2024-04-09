import * as Instance from "@/f_shared/axiosinstance";
import { MutationFunction, useMutation } from "@tanstack/react-query";

type RequestionData = any;

type ResponseDto = {
  message: string;
  data?: any;
};

const mutationFn: MutationFunction<ResponseDto, RequestionData> = async (
  req
) => {
  const res = await Instance.Base.post<ResponseDto>("/login", req);
  return res.data;
};

export const usePostLogin = () => {
  const { data, mutate, isSuccess } = useMutation({
    mutationFn,
  });
  return { data, isSuccess, postLogin: mutate };
};
