type ResponseDto<T> = {
  message: string;
  data: T;
};

type RequestionData<T> = T;

type HealthData_Type = {
  email: string;
};

type ResonsePostLogin_Type = {
  message: string;
  userInfo: string;
};

type RequestFormlogin = {
  email: string;
  password: string | number;
};
