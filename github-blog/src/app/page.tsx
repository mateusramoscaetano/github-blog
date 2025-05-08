"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GithubBlog } from "./components/github-blog";
import { Header } from "./components/header";

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Header />
      <GithubBlog />
    </QueryClientProvider>
  );
}
