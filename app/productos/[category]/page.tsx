import { notFound } from "next/navigation";

import Breadcrumbs from "./../../components/Breadcrumbs";
import CategorySidebar from "./../../components/CategorySidebar";
import ProductCard from "./../../components/ProductCard";

import { categories } from "./../../data/categories";
import { products } from "./../../data/products";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: Props) {
  const { category: categorySlug } =
    await params;

  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter(
    (product) =>
      product.categorySlug === category.slug
  );

  return (
    <main className="min-h-screen bg-[#f8faf9] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              {
                label: "Productos",
                href: "/productos",
              },
              { label: category.name },
            ]}
          />

          <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-[#77D89E]">
            Categoría
          </span>

          <h1 className="mt-4 text-5xl font-black tracking-tight text-[#093830]">
            {category.name}
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <CategorySidebar />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                slug={product.slug}
                categorySlug={product.categorySlug}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}