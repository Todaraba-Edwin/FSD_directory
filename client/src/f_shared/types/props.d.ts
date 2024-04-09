type DefaultChildren_Props = {
  children: React.ReactNode;
};

type LoginForm_Props = DefaultChildren_Props & {
  formTitle: string;
  inputs: LoginRegister[];
  buttonName: string;
  register: any;
  onSubmit: () => void;
};