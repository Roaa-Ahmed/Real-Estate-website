import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 20,
      refetchOnWindowFocus: false,
      retry: 1,
      experimental_prefetchInRender: true,
    },
  },
});
