"use client";
import { useRouter } from "next/navigation";
import React from "react";
import * as Const from "../constrant";

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
    router.push("/");
  };
  return (
    <div className={`${Const.Hover_fontWeight[600]}`} onClick={onBack}>
      GoHome
    </div>
  );
}
