"use client";
import { formatDistanceToNow } from "date-fns";
import { useIssueDetails } from "@/http/get-details";
import { useParams, useRouter } from "next/navigation";
import { ptBR } from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";

import { Link } from "../components/link";
import { Calendar, Github, MessageCircle } from "lucide-react";

export function BlogDetails() {
  const param = useParams<{ id: string }>();
  const router = useRouter();

  const id = param.id;

  const { data } = useIssueDetails(id);

  if (!id) {
    router.push("/");
    return <>Voltando...</>;
  }

  console.log(id);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center mt-[-100px] w-full">
        <div className="text-base-text flex flex-col  py-8 px-10 rounded-[10px] bg-base-profile max-w-[864px] z-20 gap-8 relative w-full shadow-md">
          <div className="flex justify-between">
            <Link label="VOLTAR" className="" variant="back" href="/" />
            <Link
              label="GITHUB"
              className=""
              variant="default"
              href={
                "https://github.com/mateusramoscaetano/github-blog/issues/" + id
              }
            />
          </div>

          <div className="flex flex-col max-w-[600px] ">
            <h1 className="text-2xl text-base-title bold mb-2">{data.title}</h1>

            <div className="flex gap-6 flex-col sm:flex-row items-start sm:items-center">
              <div className="flex gap-2 items-center justify-center">
                <Github className="text-base-label size-[18px]" />{" "}
                {data.user.login}
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Calendar className="text-base-label size-[18px]" />{" "}
                {formatDistanceToNow(data.created_at, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </div>
              <div className="flex gap-2 items-center justify-center">
                <MessageCircle className="text-base-label size-[18px]" />{" "}
                {data.comments} seguidores
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col text-white  items-center justify-center mt-12 markdown">
        <ReactMarkdown
          className={
            "w-full max-w-[864px] items-center justify-center space-y-2"
          }
        >
          {data.body}
        </ReactMarkdown>
      </div>
    </>
  );
}
