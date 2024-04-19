"use client";
import React from "react";
// import styles from "./userTemplate.module.css";
import * as Feat from "@/d_features/LinksUi";
import * as Hooks from "@/e_entities/hooks/user";
import * as Const from "@/f_shared/constrant";

export function UserTemplate({ children }: { children: React.ReactNode }) {
    const { userType } = Hooks.useGetUserType({
        name: Const.LocalStorageKeys.USERTYPE,
    });

    return (
        <>
            <nav
            // className={styles.SideNav}
            >
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
