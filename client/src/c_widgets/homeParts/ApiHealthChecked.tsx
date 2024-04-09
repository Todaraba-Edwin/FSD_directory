"use client";
import { useGetHealthCheck } from "@/e_entities/api/get/useGetHealthCheck";
import React from "react";

export function ApiHealthChecked() {
  const { data: res, isLoading, isError } = useGetHealthCheck();

  return (
    <div>
      <h2>
        ApiHealthChecked :{" "}
        {`"${isLoading ? "isLoading..." : isError ? "error" : res?.message}"`}
      </h2>
    </div>
  );
}
