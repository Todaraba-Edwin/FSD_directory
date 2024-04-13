import * as Instance from "@/f_shared/axiosinstance";
import * as Tans from "@tanstack/react-query";

const mutationFn: Tans.MutationFunction<
  ResponseDto<ResonsePostLogin_Type>,
  RequestionData<any>
> = async (req) => {
  const res = await Instance.Base.post<ResponseDto<ResonsePostLogin_Type>>(
    "/login",
    req
  );
  return res.data;
};

export const usePostLogin = () => {
  const { data, mutate, isPending } = Tans.useMutation({
    mutationFn,
  });
  return { data, isPending, postLogin: mutate };
};
