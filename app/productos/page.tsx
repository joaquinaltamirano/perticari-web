"use client";

import {
  useMemo,
  useState,
} from "react";

import Breadcrumbs from "./../components/Breadcrumbs";
import CategorySidebar from "./../components/CategorySidebar";
import ProductCard from "./../components/ProductCard";
import SearchBar from "./../components/SearchBar";

import { products } from "./../data/products";

export default function ProductosPage() {
  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const [
    selectedSubcategory,
    setSelectedSubcategory,
  ] = useState("");

  const filteredProducts =
    useMemo(() => {
      return products.filter(
        (product) => {
          const matchesSearch =
            product.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesCategory =
            !selectedCategory ||
            product.categorySlug ===
              selectedCategory;

          const matchesSubcategory =
            !selectedSubcategory ||
            product.subcategorySlug ===
              selectedSubcategory;

          return (
            matchesSearch &&
            matchesCategory &&
            matchesSubcategory
          );
        }
      );
    }, [
      search,
      selectedCategory,
      selectedSubcategory,
    ]);

  return (
    <main className="min-h-screen bg-[#f8faf9] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14">

          <Breadcrumbs
            items={[
              {
                label: "Inicio",
                href: "/",
              },
              {
                label:
                  "Productos",
              },
            ]}
          />

          <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
            Catálogo
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[#093830]">
            Productos industriales
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-600">
            Encontrá
            rápidamente
            productos para
            construcción,
            herrería e
            industria.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10">
          <SearchBar
            value={search}
            onChange={
              setSearch
            }
          />
        </div>

        {/* Grid */}
        <div className="grid gap-10 xl:grid-cols-[300px_1fr]">

          <CategorySidebar
            selected={
              selectedCategory
            }
            onSelect={(
              category,
              subcategory
            ) => {
              setSelectedCategory(
                category
              );

              setSelectedSubcategory(
                subcategory ||
                  ""
              );
            }}
          />

          <div>
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-zinc-500">
                {
                  filteredProducts.length
                }{" "}
                productos
                encontrados
              </span>
            </div>

            {filteredProducts.length ===
              0 && (
              <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-16 text-center">
                <h3 className="text-2xl font-black text-[#093830]">
                  No encontramos
                  resultados
                </h3>

                <p className="mt-4 text-zinc-600">
                  Probá otra
                  búsqueda.
                </p>
              </div>
            )}

            {filteredProducts.length >
              0 && (
              <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">

                {filteredProducts.map(
                  (
                    product
                  ) => (
                    <ProductCard
                      key={
                        product.id
                      }
                      slug={
                        product.slug
                      }
                      categorySlug={
                        product.categorySlug
                      }
                      name={
                        product.name
                      }
                      category={
                        product.category
                      }
                      price={
                        product.price
                      }
                    />
                  )
                )}

              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}