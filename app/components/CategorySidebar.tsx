"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { categories } from "../data/categories";

type Props = {
  selected?: string;
  onSelect?: (
    category: string,
    subcategory?: string
  ) => void;
};

export default function CategorySidebar({
  selected,
  onSelect,
}: Props) {
  const [openSections, setOpenSections] =
    useState<string[]>(["canos"]);

  const toggleSection = (
    slug: string
  ) => {
    setOpenSections((prev) =>
      prev.includes(slug)
        ? prev.filter(
            (s) => s !== slug
          )
        : [...prev, slug]
    );
  };

  return (
    <aside className="sticky top-28 h-fit rounded-[36px] border border-zinc-200 bg-white p-7 shadow-sm">

      <div className="mb-6">
        <h3 className="text-2xl font-black text-[#093830]">
          Categorías
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          Explorá el catálogo
        </p>
      </div>

      <div className="space-y-2">
        {categories.map(
          (category) => {
            const isOpen =
              openSections.includes(
                category.slug
              );

            const isSelected =
              selected ===
              category.slug;

            return (
              <div
                key={
                  category.slug
                }
                className="overflow-hidden rounded-2xl border border-zinc-200"
              >
                {/* Main category */}
                <button
                  onClick={() => {
                    toggleSection(
                      category.slug
                    );

                    onSelect?.(
                      category.slug
                    );
                  }}
                  className={`flex w-full items-center justify-between px-4 py-4 text-left transition ${
                    isSelected
                      ? "bg-[#093830] text-white"
                      : "bg-white hover:bg-zinc-50"
                  }`}
                >
                  <span className="font-bold">
                    {
                      category.name
                    }
                  </span>

                  {isOpen ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                {/* Children */}
                {isOpen &&
                  category.children
                    .length >
                    0 && (
                    <div className="border-t border-zinc-100 bg-zinc-50 p-2">

                      {category.children.map(
                        (
                          child
                        ) => (
                          <button
                            key={
                              child.slug
                            }
                            onClick={() =>
                              onSelect?.(
                                category.slug,
                                child.slug
                              )
                            }
                            className="mb-1 flex w-full items-center rounded-xl px-3 py-3 text-left text-sm font-medium text-[#093830] transition hover:bg-[#77D89E]/20"
                          >
                            {
                              child.name
                            }
                          </button>
                        )
                      )}
                    </div>
                  )}
              </div>
            );
          }
        )}
      </div>
    </aside>
  );
}