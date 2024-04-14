import * as Instance from "@/f_shared/axiosinstance";
import { useQuery } from "@tanstack/react-query";

const queryFn = async (): Promise<ResponseDto<HealthData_Type[]>> => {
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
