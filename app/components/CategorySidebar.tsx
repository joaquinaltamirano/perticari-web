type Props = {
  selected: string;
  onSelect: (category: string) => void;
};

const categories = [
  "Todos",
  "Caños",
  "Chapas",
  "Perfiles",
  "Construcción",
];

export default function CategorySidebar({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6">
      
      <h3 className="text-lg font-black text-[#093830]">
        Categorías
      </h3>

      <div className="mt-6 flex flex-col gap-3">
        {categories.map((category) => {
          const active = selected === category;

          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                active
                  ? "bg-[#093830] text-white"
                  : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}