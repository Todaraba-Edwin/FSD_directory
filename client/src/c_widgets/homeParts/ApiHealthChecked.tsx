"use client";
import React from "react";
import * as Get from "@/e_entities/api/get";

export function ApiHealthChecked() {
  const { data: res, isLoading, isError } = Get.useGetHealthCheck();

  return (
    <div>
      <h2>
        {`ApiHealthChecked : "${
          isLoading ? "isLoading..." : isError ? "error" : res?.message
        }"`}
      </h2>
    </div>
  );
}
