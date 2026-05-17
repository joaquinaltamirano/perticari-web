"use client";

import { useParams } from "next/navigation";
import { products } from "./../../../data/products";
import Breadcrumbs from "./../../../components/Breadcrumbs";
import { useCart } from "./../../../data/cart";

import { toast } from "sonner";

export default function ProductPage() {
  const params = useParams();

  const { addItem } = useCart();

  const product = products.find(
    (item) =>
      item.slug === params.slug
  );

  if (!product) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#f8faf9] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Breadcrumbs
          items={[
            {
              label: "Inicio",
              href: "/",
            },
            {
              label: "Productos",
              href: "/productos",
            },
            {
              label: product.category,
              href: `/productos/${product.categorySlug}`,
            },
            {
              label: product.name,
            },
          ]}
        />

        <div className="mt-10 grid gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm">
            <div className="flex h-[420px] items-center justify-center rounded-[24px] bg-[#093830]">
              <span className="text-3xl font-black text-white/30">
                {product.name}
              </span>
            </div>
          </div>

          {/* Info */}
          <div>

            <span className="inline-flex rounded-full bg-[#77D89E]/20 px-4 py-2 text-sm font-semibold text-[#093830]">
              {product.category}
            </span>

            <h1 className="mt-6 text-5xl font-black text-[#093830]">
              {product.name}
            </h1>

            <p className="mt-6 text-lg text-zinc-600">
              {product.description}
            </p>

            <div className="mt-10">
              <span className="text-5xl font-black text-[#093830]">
                {product.price}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={() => {
  addItem({
    id: product.id,
    name: product.name,
    price: product.price,
  });

  toast.success(
    "Producto agregado al pedido"
  );
}}
                className="rounded-2xl bg-[#F86E71] px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Agregar al pedido
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}