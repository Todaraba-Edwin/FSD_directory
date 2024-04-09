import React from "react";
import styles from "./userLayout.module.css";
import * as Atoms from "@/f_shared/atoms";
import * as Const from "@/f_shared/constrant";

export default function layout({ children }: DefaultChildren_Props) {
  return (
    <main className={styles.UserMain}>
      <nav className={styles.SideNav}>
        <Atoms.Link_OlWrap list={Const.defaultPathLinks} />
      </nav>
      <div>{children}</div>
    </main>
  );
}
