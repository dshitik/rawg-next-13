import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ReactQueryDevtools } from "react-query/devtools";
import "./global.css";

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
