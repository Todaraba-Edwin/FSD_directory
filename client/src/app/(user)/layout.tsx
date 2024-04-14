import React from "react";
import styles from "./userLayout.module.css";

export default function layout({ children }: DefaultChildren_Props) {
    return <main className={styles.UserMain}>{children}</main>;
}
