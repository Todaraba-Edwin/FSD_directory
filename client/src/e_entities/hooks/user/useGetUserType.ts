import { useEffect, useState } from "react";
import * as Tools from "@/e_entities/tools";

type Props = {
    name: string;
};

export const useGetUserType = ({ name }: Props) => {
    const [userType, setUserType] = useState<string>("");
    useEffect(() => {
        if (!window) return;
        setUserType(
            Tools.LocalStorage_get({
                name,
            }),
        );
    }, [name]);
    return { userType };
};
