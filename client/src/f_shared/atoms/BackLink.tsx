"use client";
import { useRouter } from "next/navigation";
import React from "react";
import * as Tools from "@/f_shared/tools";
import * as Const from "@/f_shared/constrant";

export function BackLink() {
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  return (
    <div className={`${Const.Hover_fontWeight[600]}`} onClick={onBack}>
      BackLink
    </div>
  );
}

export function GoHomeLink() {
  const router = useRouter();
  const onBack = () => {
    const getUserType = Tools.LocalStorage_get({
      name: Const.LocalStorageKeys.USERTYPE,
    });

    if (getUserType) {
      Tools.LocalStorage_remove({ name: Const.LocalStorageKeys.USERTYPE });
    }
    router.push("/");
  };
  return (
    <div className={`${Const.Hover_fontWeight[600]}`} onClick={onBack}>
      GoHome
    </div>
  );
}
