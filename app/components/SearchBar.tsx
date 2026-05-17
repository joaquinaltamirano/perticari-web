"use client";

type Props = {
  value: string;
  onChange: (
    value: string
  ) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar caños, chapas, perfiles..."
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="h-16 w-full rounded-[24px] border border-zinc-200 bg-white px-7 text-lg text-[#093830] shadow-sm outline-none transition focus:border-[#77D89E] focus:ring-4 focus:ring-[#77D89E]/20"
      />
    </div>
  );
}