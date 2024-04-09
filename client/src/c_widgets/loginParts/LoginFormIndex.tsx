"use client";
import React from "react";
import * as Entity from "@/e_entities/hooks/login";
import * as Features from "@/d_features/molecules/forms";
import * as Const from "@/f_shared/constrant";

export function LoginFormIndex() {
  const {
    // formsFn
    register,
    onSubmit,

    // async
    isSuccessMessage,
    isErrMessage,
    isPending,
  } = Entity.useLoginSubmit();

  return (
    <Features.LoginForm
      formTitle="LoginForm"
      onSubmit={onSubmit}
      inputs={Const.LoginRegisterList}
      register={register}
      buttonName="Login"
    >
      {isPending ? (
        <div>isPending....</div>
      ) : (
        <>
          {isSuccessMessage && <p>{isSuccessMessage}</p>}
          {isErrMessage && <p>{isErrMessage}</p>}
        </>
      )}
    </Features.LoginForm>
  );
}
