type LoiginInputs = {
  email: string;
  password: string;
};

type LoginRegister = {
  type: string;
  key: "email" | "password";
};
