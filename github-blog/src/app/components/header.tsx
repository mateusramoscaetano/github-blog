"use client";

import Image from "next/image";

export function Header() {
  return (
    <>
      <div className=" bg-blue bg-gradient-to-t z-10 from-blue to-base-profile w-full h-[296px] relative flex items-start justify-center">
        <Image
          src={"/effect.png"}
          alt=""
          width={409}
          height={188}
          className="absolute bottom-10 left-0"
        />
        <Image
          src={"/effect.png"}
          alt=""
          width={409}
          height={188}
          className="absolute bottom-10 right-0 rotate-180"
        />
        <Image
          src={"/logo-github-blog.svg"}
          alt=""
          width={148}
          height={98}
          className="mt-16"
        />
      </div>
    </>
  );
}
