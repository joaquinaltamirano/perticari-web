import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section className="bg-[#f8faf9] py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
            Categorías
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#093830] md:text-5xl">
            Explorá nuestros productos.
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            Encontrá rápidamente materiales para construcción, herrería e industria.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              title={category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}