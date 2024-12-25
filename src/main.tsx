import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Router from "./router";
import GeneralError from "./pages/errors/GeneralError";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import handleServerError from "./utils/handleServerError";
import "./styles/global.css";
import { theme } from "./styles/theme";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
        // eslint-disable-next-line no-console
        console.log(failureCount);
        return !(
          error instanceof AxiosError &&
          [401, 403].includes(error.response?.status ?? 0)
        );
      },
      refetchOnWindowFocus: import.meta.env.PROD,
    },
    mutations: {
      onError: (error) => handleServerError(error),
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        // showToastNoti("Session expired!")
        // useStore.getState().resetAuth()
      }
      if (error instanceof AxiosError && error.response?.status === 403) {
        router.navigate("/forbidden", { replace: true });
      }
    },
  }),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<Router />} errorElement={<GeneralError />} />
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <RouterProvider router={router} />
      </MantineProvider>
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>
);
