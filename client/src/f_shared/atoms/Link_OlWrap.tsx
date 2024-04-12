"use client";

import React from "react";
import styles from "./link_OlWrap.module.css";
import * as Const from "@/f_shared/constrant";
import * as AtomsHooks from "@/f_shared/atoms/atomsHooks";

type Props = {
  list: any[];
};

export function Link_OlWrap({ list }: Props) {
  const { onRouter, onSetLiColor } = AtomsHooks.useLink_Ol();

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
