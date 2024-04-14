type DefaultChildren_Props = {
    children: React.ReactNode;
};

type ModuleCSS_Props = {
    styles: Record<string, string>;
};

type LoginForm_Props = DefaultChildren_Props & {
    formTitle: string;
    inputs: LoginRegister_Type[];
    buttonName: string;
    register: any;
    onSubmit: () => void;
};

type Localstorage_Props = {
    name: string;
};
