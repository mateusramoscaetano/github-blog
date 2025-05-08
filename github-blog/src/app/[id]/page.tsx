"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BlogDetails } from "./details";
import { Header } from "../components/header";

export default function BlogDetailsPage() {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <Header />
        <BlogDetails />
      </QueryClientProvider>
    </>
  );
}
