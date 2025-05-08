"use client";

import { Building, Github, User } from "lucide-react";

import Image from "next/image";
import { Link } from "./link";
import { useUser } from "@/http/get-user";

export function Profile() {
  const { data, isLoading, isError } = useUser("mateusramoscaetano");

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar os posts.</p>;
  return (
    <>
      <div className="flex items-center justify-center mt-[-100px] w-full">
        <div className="text-base-text flex flex-col sm:flex-row py-8 px-10 rounded-[10px] bg-base-profile max-w-[864px] z-20 gap-8 relative w-full shadow-md">
          <Link
            label="GITHUB"
            className="absolute bottom-2 right-2 xxs:right-8 xxs:top-10 xxs:absolute"
            href="https://github.com/mateusramoscaetano"
            variant="default"
          />

          <div className="w-[148px] h-[148px] rounded-lg overflow-hidden">
            <Image
              src={data.avatar_url}
              width={148}
              height={148}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col max-w-[600px] ">
            <h1 className="text-2xl text-base-title bold mb-2">{data.name}</h1>
            <span className="text-base text-base-text mb-6">{data.bio}</span>
            <div className="flex gap-6 flex-col sm:flex-row items-start sm:items-center">
              <div className="flex gap-2 items-center justify-center">
                <Github className="text-base-label size-[18px]" /> {data.login}
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Building className="text-base-label size-[18px]" /> Rocketseat
              </div>
              <div className="flex gap-2 items-center justify-center">
                <User className="text-base-label size-[18px]" />{" "}
                {data.followers} seguidores
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
