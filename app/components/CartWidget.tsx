"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../data/cart";

export default function CartWidget() {
  const [open, setOpen] =
    useState(false);

  const {
    items,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalItems =
    items.reduce(
      (acc, item) =>
        acc + item.quantity,
      0
    );

  const totalPrice =
    useMemo(() => {
      return items.reduce(
        (acc, item) => {
          const price =
            Number(
              item.price
                .replace("$", "")
                .replace(/\./g, "")
            ) || 0;

          return (
            acc +
            price * item.quantity
          );
        },
        0
      );
    }, [items]);

  const whatsappLink =
    useMemo(() => {
      const phone =
        "5491130780302";

      const message = `
Hola Perticari, quiero solicitar una cotización:

${items
  .map(
    (item) =>
      `• ${item.name} x${item.quantity}`
  )
  .join("\n")}

Total estimado:
$${totalPrice.toLocaleString(
        "es-AR"
      )}
`;

      return `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`;
    }, [
      items,
      totalPrice,
    ]);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() =>
            setOpen(true)
          }
          className="rounded-full bg-[#F86E71] px-6 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
        >
          <div className="flex items-center gap-3">

  <span>
    Pedido
  </span>

  {totalItems > 0 && (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-black text-[#F86E71]">
      {totalItems}
    </span>
  )}
</div>
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() =>
            setOpen(false)
          }
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 p-6">

          <div>
            <h2 className="text-2xl font-black text-[#093830]">
              Tu pedido
            </h2>

            <p className="text-sm text-zinc-500">
              Cotización estimada
            </p>
          </div>

          <button
            onClick={() =>
              setOpen(false)
            }
          >
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">

          {items.length === 0 ? (
            <div className="mt-24 text-center">
              <h3 className="text-xl font-black text-[#093830]">
                Tu pedido está vacío
              </h3>

              <p className="mt-3 text-zinc-500">
                Agregá productos
                para cotizar.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-zinc-200 p-5"
                >
                  <h3 className="font-bold text-[#093830]">
                    {item.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">

                    {/* Quantity */}
                    <div className="flex items-center gap-3 rounded-full border border-zinc-200 px-3 py-2">

                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                        className="text-lg font-bold text-[#093830]"
                      >
                        −
                      </button>

                      <span className="min-w-[20px] text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                        className="text-lg font-bold text-[#093830]"
                      >
                        +
                      </button>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() =>
                        removeItem(
                          item.id
                        )
                      }
                      className="text-sm text-[#F86E71]"
                    >
                      Eliminar
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-200 p-6">

          <div className="mb-5 flex items-center justify-between">
            <span className="text-zinc-500">
              Total estimado
            </span>

            <span className="text-3xl font-black text-[#093830]">
              $
              {totalPrice.toLocaleString(
                "es-AR"
              )}
            </span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            className="flex w-full items-center justify-center rounded-2xl bg-[#77D89E] px-6 py-4 font-bold text-[#093830] transition hover:opacity-90"
          >
            Solicitar cotización
          </a>

          <button
            onClick={clearCart}
            className="mt-3 w-full text-sm text-zinc-500"
          >
            Vaciar pedido
          </button>
        </div>
      </aside>
    </>
  );
}