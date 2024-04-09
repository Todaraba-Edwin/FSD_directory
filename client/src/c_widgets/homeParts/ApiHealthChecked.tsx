"use client";
import { useGetHealthCheck } from "@/e_entities/api/methods.get/useGetHealthCheck";
import React from "react";

export function ApiHealthChecked() {
  const { data: res, isLoading } = useGetHealthCheck();

  if (isLoading) return;
  if (res?.message != "SUCCESS") return;
  const { message, data } = res;
  return (
    <div>
      <h2>ApiHealthChecked : {`"${message}"`}</h2>
      {data.map(({ email }) => (
        <div key={email}>{email}</div>
      ))}
    </div>
  );
}
