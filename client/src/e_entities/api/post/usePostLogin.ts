import * as Instance from "@/f_shared/axiosinstance";
import { MutationFunction, useMutation } from "@tanstack/react-query";

type RequestionData = any;

type ResponseDto = {
  message: string;
  data: {
    message: string;
    userInfo: string;
  };
};

const mutationFn: MutationFunction<ResponseDto, RequestionData> = async (
  req
) => {
  const res = await Instance.Base.post<ResponseDto>("/login", req);
  return res.data;
};

export const usePostLogin = () => {
  const { data, mutate, isPending } = useMutation({
    mutationFn,
  });
  return { data, isPending, postLogin: mutate };
};
