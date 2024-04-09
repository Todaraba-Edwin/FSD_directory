"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const ReactQueryClient = ({ children }: DefaultChildren_Props) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          // 컴포넌트가 마운트될 때마다 캐시가 있더라도 refetch 할지 설정
          retry: 1,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
