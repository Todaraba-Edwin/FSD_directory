"use client";

import React from "react";
import styles from "./link_OlWrap.module.css";
import * as NextNav from "next/navigation";
import * as Const from "@/f_shared/constrant";

type Props = {
  list: any[];
};

export function Link_OlWrap({ list }: Props) {
  const router = NextNav.useRouter();
  const onRouter = (href: string) => () => {
    router.push(href);
  };
  const selectedSegment = NextNav.useSelectedLayoutSegment();

  return (
    <ol className={styles.Ol}>
      {list.map(({ link, path }) => (
        <li
          className={`${Const.Hover_fontWeight[600]} ${
            selectedSegment === link ? styles.currentPath : styles.otherPath
          }`}
          key={link}
          onClick={onRouter(path)}
        >
          {link}
        </li>
      ))}
    </ol>
  );
}
