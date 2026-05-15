"use client";

import { useMemo, useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import CategorySidebar from "../../components/CategorySidebar";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar";

import { products } from "../../data/products";

export default function ProductosPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <main className="min-h-screen bg-[#f8faf9] py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-12">
          
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
            Encontrá rápidamente productos para construcción,
            herrería e industria.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          
          {/* Sidebar */}
          <CategorySidebar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Products */}
          <div>
            
            {/* Results */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-zinc-500">
                {filteredProducts.length} productos encontrados
              </span>
            </div>

            {/* Empty */}
            {filteredProducts.length === 0 && (
              <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-16 text-center">
                <h3 className="text-2xl font-black text-[#093830]">
                  No encontramos resultados.
                </h3>

                <p className="mt-4 text-zinc-600">
                  Probá con otra búsqueda o categoría.
                </p>
              </div>
            )}

            {/* Grid */}
            {filteredProducts.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    slug={product.slug}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}