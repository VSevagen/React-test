/* eslint-disable import/no-extraneous-dependencies */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app";
import ModalProvider from "./providers/modalProvider";
import store from "./redux";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
