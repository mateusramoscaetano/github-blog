import { api } from "@/axios";
import { useQuery } from "@tanstack/react-query";

const getUser = async (username: string) => {
  const response = await api.get(`users/${username}`);
  return response.data;
};

export const useUser = (username: string) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getUser(username),
  });
};
