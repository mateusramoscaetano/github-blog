import type { GithubIssue } from "@/@types/github-types";
import { api } from "@/axios";
import { useQuery } from "@tanstack/react-query";

const getIssueDetails = async (id?: string) => {
  if (!id) {
    return;
  }

  const response = await api.get(
    `repos/mateusramoscaetano/github-blog/issues/${id}`
  );
  return response.data;
};

export function useIssueDetails(id?: string) {
  return useQuery<GithubIssue>({
    queryKey: ["issue", id],
    queryFn: () => getIssueDetails(id),
  });
}
