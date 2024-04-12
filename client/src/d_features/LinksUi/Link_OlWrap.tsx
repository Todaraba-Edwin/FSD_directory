"use client";

import React from "react";
import styles from "./link_OlWrap.module.css";
import * as Hooks from "@/e_entities/hooks/common";
import * as Const from "@/f_shared/constrant";

type Props = {
  list: any[];
};

export function Link_OlWrap({ list }: Props) {
  const { onRouter, onSetLiColor } = Hooks.useLink_Ol({styles});

  return (
    <ol className={styles.Ol}>
      {list.map(({ type, link, path }) => (
        <li
          className={`${Const.Hover_fontWeight[600]} ${onSetLiColor(link)}`}
          key={link}
          onClick={onRouter(path, type)}
        >
          {link}
        </li>
      ))}
    </ol>
  );
}
