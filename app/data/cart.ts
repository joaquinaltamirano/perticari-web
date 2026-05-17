import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (
    item: Omit<CartItem, "quantity">
  ) => void;

  removeItem: (
    id: number
  ) => void;

  increaseQuantity: (
    id: number
  ) => void;

  decreaseQuantity: (
    id: number
  ) => void;

  clearCart: () => void;
};

export const useCart =
  create<CartStore>()(
    persist(
      (set) => ({
        items: [],

        addItem: (
          item
        ) =>
          set((state) => {
            const existing =
              state.items.find(
                (
                  i
                ) =>
                  i.id ===
                  item.id
              );

            if (
              existing
            ) {
              return {
                items:
                  state.items.map(
                    (
                      i
                    ) =>
                      i.id ===
                      item.id
                        ? {
                            ...i,
                            quantity:
                              i.quantity +
                              1,
                          }
                        : i
                  ),
              };
            }

            return {
              items: [
                ...state.items,
                {
                  ...item,
                  quantity: 1,
                },
              ],
            };
          }),

        increaseQuantity:
          (id) =>
            set(
              (
                state
              ) => ({
                items:
                  state.items.map(
                    (
                      item
                    ) =>
                      item.id ===
                      id
                        ? {
                            ...item,
                            quantity:
                              item.quantity +
                              1,
                          }
                        : item
                  ),
              })
            ),

        decreaseQuantity:
          (id) =>
            set(
              (
                state
              ) => ({
                items:
                  state.items
                    .map(
                      (
                        item
                      ) =>
                        item.id ===
                        id
                          ? {
                              ...item,
                              quantity:
                                item.quantity -
                                1,
                            }
                          : item
                    )
                    .filter(
                      (
                        item
                      ) =>
                        item.quantity >
                        0
                    ),
              })
            ),

        removeItem:
          (id) =>
            set(
              (
                state
              ) => ({
                items:
                  state.items.filter(
                    (
                      item
                    ) =>
                      item.id !==
                      id
                  ),
              })
            ),

        clearCart:
          () =>
            set({
              items: [],
            }),
      }),
      {
        name:
          "perticari-cart",
      }
    )
  );