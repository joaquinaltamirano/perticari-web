import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
              Destacados
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#093830] md:text-5xl">
              Productos más buscados.
            </h2>
          </div>

          <button className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold transition hover:border-[#093830] hover:text-[#093830]">
            Ver catálogo completo
          </button>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}