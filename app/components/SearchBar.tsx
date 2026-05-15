"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      
      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Buscar productos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-16 w-full rounded-2xl border border-zinc-200 bg-white pl-14 pr-5 text-sm outline-none transition focus:border-[#77D89E]"
      />
    </div>
  );
}