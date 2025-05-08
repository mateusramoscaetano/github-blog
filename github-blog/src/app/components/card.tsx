"use client";

interface CardProps {
  title: string;
  created_at: string;
  content: string;

  onClick?: () => void;
}

export function Card({ content, created_at, title, onClick }: CardProps) {
  return (
    <div
      className="bg-base-post text-base-text flex flex-col gap-4 p-6 rounded-lg shadow-md max-h-[260px] overflow-hidden border-2 border-transparent  hover:border-base-label w-full"
      onClick={onClick}
    >
      <header className="flex items-center justify-between">
        <span className="text-base-title text-xl font-bold ">{title}</span>
        <span className="text-base-span text-sm">
          {new Date(created_at).toLocaleDateString()}
        </span>
      </header>
      <main className="flex-1 overflow-hidden">
        <p className="text-base-text text-base line-clamp-3">{content}</p>
      </main>
    </div>
  );
}
