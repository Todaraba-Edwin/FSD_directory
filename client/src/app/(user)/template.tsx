"use client";
import styles from "./userLayout.module.css";
import * as Feat from "@/d_features/LinksUi";
import * as Tools from "@/e_entities/tools";
import * as Const from "@/f_shared/constrant";

export default function Template({ children }: { children: React.ReactNode }) {
  const getUserType = Tools.LocalStorage_get({
    name: Const.LocalStorageKeys.USERTYPE,
  });
  if (!getUserType) return;
  const isStudents = getUserType === Const.UserType.STUDENT;
  return (
    <>
      <nav className={styles.SideNav}>
        <Feat.Link_OlWrap
          list={isStudents ? Const.PathLinks.Student : Const.PathLinks.Teacher}
        />
      </nav>
      {children}
    </>
  );
}
