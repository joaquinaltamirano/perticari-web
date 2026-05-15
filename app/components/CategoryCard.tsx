type Props = {
  title: string;
  description: string;
};

export default function CategoryCard({
  title,
  description,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#77D89E] hover:shadow-2xl">
      
      {/* Glow */}
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#77D89E]/10 blur-3xl transition duration-300 group-hover:bg-[#77D89E]/20" />

      <div className="relative z-10">
        <h3 className="text-2xl font-black text-[#093830]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>

        <button className="mt-6 text-sm font-semibold text-[#F86E71] transition hover:opacity-70">
          Ver productos →
        </button>
      </div>
    </div>
  );
}