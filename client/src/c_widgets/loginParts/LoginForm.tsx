"use client";

import { usePostLogin } from "@/e_entities/api/methods.post/usePostLogin";
import React, { EventHandler } from "react";

export function LoginForm() {
  const { postLogin } = usePostLogin();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("동작");
    postLogin({
      //   email: "johndoe@example.com", // true
      email: "johndoe@example.co", // false
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>LoginForm</h2>
      <button type="submit">Login</button>
    </form>
  );
}
