"use client";

import cn from "@/utils/cn";
import { ArrowUpRightFromSquare, SquareArrowLeft } from "lucide-react";

type Props = {
  label: string;
  className?: string;
  variant?: "default" | "back";
  href?: string;
};

export function Link({ label, className, variant, href }: Props) {
  return (
    <>
      <a
        href={href}
        className={cn(" text-blue  p-1 cursor-pointer ", className)}
      >
        <div className="border-b-2 border-transparent hover:border-b-2 hover:border-blue flex items-center justify-center gap-2 text-xs font-bold">
          {variant === "back" && <SquareArrowLeft size={16} />}
          {label}
          {variant === "default" && <ArrowUpRightFromSquare size={16} />}
        </div>
      </a>
    </>
  );
}
