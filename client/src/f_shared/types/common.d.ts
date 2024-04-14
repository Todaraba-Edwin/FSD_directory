// Localstorage
type Set_Localstorage_Props = Localstorage_Props & {
    payload: string;
};

type Set_Localstorage_Type = ({
    name,
    payload,
}: Set_Localstorage_Props) => void;

type Get_Localstorage_Type = ({ name }: Localstorage_Props) => string | null;
type Remove_Localstorage_Type = ({ name }: Localstorage_Props) => void;

// Elements
type InputOpts_Type = Partial<{
    placeholder: string;
    maxLength: number;
    multiple: boolean;
}>;
