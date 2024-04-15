"use client";
import styles from "./userLayout.module.css";
import * as Feat from "@/d_features/LinksUi";
import * as Tools from "@/e_entities/tools";
import * as Const from "@/f_shared/constrant";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const [userType, setUserType] = useState<string>("");
    useEffect(() => {
        if (!window) return;
        setUserType(
            Tools.LocalStorage_get({
                name: Const.LocalStorageKeys.USERTYPE,
            }),
        );
    }, []);
    if (!userType) return;
    return (
        <>
            <nav className={styles.SideNav}>
                <Feat.Link_OlWrap
                    list={
                        userType === Const.UserType.STUDENT
                            ? Const.PathLinks.Student
                            : Const.PathLinks.Teacher
                    }
                />
            </nav>
            {children}
        </>
    );
}
