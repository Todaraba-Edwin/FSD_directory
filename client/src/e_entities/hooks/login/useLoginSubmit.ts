import { useState } from "react";
// src
import * as Post from "@/e_entities/api/post";
import * as Tools from "@/e_entities/tools/loginTools";

// lib
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

export const useLoginSubmit = () => {
  const { register, handleSubmit } = useForm<LoiginInputs>();
  const { postLogin, isPending } = Post.usePostLogin();
  const [isSuccessMessage, setIsSuccessMessage] = useState<string>("");
  const [isErrMessage, setIsErrMessage] = useState<string>("");
  const onSubmit: SubmitHandler<LoiginInputs> = (formdata) => {
    setIsErrMessage("");
    setIsSuccessMessage("");

    const { isEmpty } = Tools.handle_EmptyValue(formdata);
    if (isEmpty) return;

    postLogin(formdata, {
      onSuccess: ({ data: { message } }) => {
        setIsSuccessMessage(message);
      },
      onError: (err: Error) => {
        if (axios.isAxiosError(err)) {
          if (!err.response?.data) return;
          const { message } = err.response.data;
          setIsErrMessage(message);
        }
      },
    });
  };
  return {
    // formsFn
    register,
    handleSubmit,
    onSubmit,

    // asynx
    isSuccessMessage,
    isErrMessage,
    isPending,
  };
};