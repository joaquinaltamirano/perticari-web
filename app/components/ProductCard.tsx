import Link from "next/link";

type Props = {
  slug: string;
  categorySlug: string;
  name: string;
  category: string;
  price: string;
};

export default function ProductCard({
  slug,
  categorySlug,
  name,
  category,
  price,
}: Props) {
  return (
    <Link
      href={`/productos/${categorySlug}/${slug}`}
      className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#77D89E] hover:shadow-xl"
    >
      {/* Image Placeholder */}
      <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#093830] to-[#0f4d42]">

        <span className="px-8 text-center text-xl font-black text-white/20 transition group-hover:scale-105">
          {name}
        </span>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(119,216,158,0.25),transparent_45%)]" />
      </div>

      {/* Content */}
      <div className="p-7">

        <span className="inline-flex rounded-full bg-[#77D89E]/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#093830]">
          {category}
        </span>

        <h3 className="mt-4 line-clamp-2 min-h-[64px] text-2xl font-black leading-tight text-[#093830]">
          {name}
        </h3>

        <div className="mt-8 flex items-end justify-between">

          <div>
            <span className="text-sm text-zinc-500">
              Desde
            </span>

            <p className="text-3xl font-black text-[#093830]">
              {price}
            </p>
          </div>

          <span className="rounded-full bg-[#093830] px-5 py-3 text-sm font-bold text-white transition group-hover:bg-[#77D89E] group-hover:text-[#093830]">
            Ver
          </span>

        </div>
      </div>
    </Link>
  );
}