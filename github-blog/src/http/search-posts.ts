import { useQuery } from "@tanstack/react-query";

import { api } from "@/axios";
import type { GithubIssueResponse } from "@/@types/github-types";

const searchPosts = async (query: string) => {
  const response = await api.get(
    `search/issues?q=${query}%20repo:mateusramoscaetano/github-blog`
  );
  return response.data;
};

export const useSearchPosts = (query: string) => {
  console.log(query);
  return useQuery<GithubIssueResponse>({
    queryKey: ["search", query],
    queryFn: () => searchPosts(query),
  });
};
