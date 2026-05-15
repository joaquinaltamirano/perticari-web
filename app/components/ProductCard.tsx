import Link from "next/link";
import { ShoppingCart } from "lucide-react";

type Props = {
  slug: string;
  name: string;
  category: string;
  price: string;
};

export default function ProductCard({
  slug,
  name,
  category,
  price,
}: Props) {
  return (
  <Link href={`/productos/${slug}`}>
    <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Fake image */}
      <div className="relative h-56 overflow-hidden bg-[#093830]">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#77D89E]/20 to-transparent" />

        <div className="flex h-full items-center justify-center">
          <span className="text-lg font-bold text-white/40">
            PERTICARI
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        
        <span className="text-sm font-medium text-[#77D89E]">
          {category}
        </span>

        <h3 className="mt-3 text-xl font-black leading-tight text-[#093830]">
          {name}
        </h3>

        <div className="mt-6 flex items-center justify-between">
          
          <span className="text-2xl font-black text-[#093830]">
            {price}
          </span>

          <button className="flex items-center gap-2 rounded-xl bg-[#F86E71] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            <ShoppingCart size={18} />
            Ver
          </button>
        </div>
      </div>
    </div>
  </Link>
);
}