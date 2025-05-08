"use client";

import { useSearchPosts } from "@/http/search-posts";
import { Input } from "./input";
import { Profile } from "./profile";
import { Card } from "./card";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

export function GithubBlog() {
  const { handleSubmit, getValues, register, watch } = useForm<{
    search: string;
  }>({
    defaultValues: {
      search: "",
    },
  });

  const searchTerm = watch("search");

  const { data, isLoading, refetch } = useSearchPosts(searchTerm);

  const router = useRouter();

  const onSubmit = () => {
    refetch();
  };

  if (isLoading) return <p>Carregando...</p>;

  return (
    <>
      <Profile />
      <div className="w-full flex flex-col items-center justify-start mt-10">
        <div className="flex justify-between items-center w-full max-w-[864px] mb-3">
          <span className="text-base-subtitle text-lg font-bold flex">
            Publicações
          </span>
          <span className="text-base-span text-sm">
            {data?.total_count ?? 0} Publicações
          </span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[864px]"
        >
          <Input placeholder="Buscar conteúdo" {...register("search")} />
        </form>
      </div>

      <div className="flex w-full items-center justify-center mt-12">
        <div className="grid grid-cols-2 gap-6 w-full max-w-[864px]">
          {data?.items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              created_at={item.created_at}
              content={item.body}
              onClick={() => router.push(`/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
