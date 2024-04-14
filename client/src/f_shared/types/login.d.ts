type LoiginInputs_Type = {
    email: string;
    password: string;
};

type LoginRegister_Type = {
    type: string;
    key: "email" | "password";
    options?: InputOpts_Type;
};
