"use client";

import type { ComponentProps } from "react";

type Props = ComponentProps<"input">;

export function Input({ ...props }: Props) {
  return (
    <>
      <input
        className="bg-base-input border-2 px-4 py-3 w-full max-w-[864px] text-base-text border-base-border rounded-md placeholder:text-base-label focus:outline-none focus:border-blue"
        {...props}
      />
    </>
  );
}
