import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-[#f8faf9] py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-16">
          
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Productos" },
            ]}
          />

          <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
            Catálogo
          </span>

          <h1 className="mt-4 text-5xl font-black tracking-tight text-[#093830]">
            Productos industriales.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-600">
            Explorá nuestro catálogo de productos para construcción, herrería e industria.
          </p>
        </div>

        {/* Products */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}