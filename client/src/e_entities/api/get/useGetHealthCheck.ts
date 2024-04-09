import * as Instance from "@/f_shared/axiosinstance";
import { useQuery } from "@tanstack/react-query";

type ResponseDto = {
  message: string;
  data: HealthData_Type[];
};

const queryFn = async (): Promise<ResponseDto | any> => {
  const res = await Instance.Base.get("/healthckeck");
  return res.data;
};

export const useGetHealthCheck = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn,
    queryKey: ["TEST"],
  });
  return { data, isLoading, isError };
};
