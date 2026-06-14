import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ShopifyProduct } from "@/lib/shopify";

export interface CartItem {
  lineId: string | null;
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: Array<{ name: string; value: string }>;
}

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  addItem: (item: Omit<CartItem, "lineId">) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  getWhatsAppOrderUrl: () => string | null;
}

const WHATSAPP_NUMBER = "919711009880";

function generateWhatsAppMessage(items: CartItem[]): string {
  if (items.length === 0) return "";

  const lines = items.map((item, i) => {
    const name = item.product.node.title;
    const variant = item.selectedOptions.map((o) => o.value).join(" / ");
    const qty = item.quantity;
    const price = `${item.price.currencyCode} ${parseFloat(item.price.amount).toFixed(2)}`;
    return `${i + 1}. ${name}${variant ? ` (${variant})` : ""} — Qty: ${qty} @ ${price}`;
  });

  const total = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode || "INR";

  const message = `Hello SportsLuxuryIndia! 👋%0A%0AI'd like to place an order:%0A%0A${lines.join("%0A")}%0A%0A*Total: ${currency} ${total.toFixed(2)}*%0A%0APlease confirm availability and payment details.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,

      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find((i) => i.variantId === item.variantId);
        if (existingItem) {
          const newQuantity = existingItem.quantity + item.quantity;
          set({
            items: items.map((i) =>
              i.variantId === item.variantId ? { ...i, quantity: newQuantity } : i
            ),
          });
        } else {
          set({ items: [...items, { ...item, lineId: null }] });
        }
      },

      updateQuantity: (variantId, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          set({ items: items.filter((i) => i.variantId !== variantId) });
          return;
        }
        set({
          items: items.map((i) =>
            i.variantId === variantId ? { ...i, quantity } : i
          ),
        });
      },

      removeItem: (variantId) => {
        const { items } = get();
        set({ items: items.filter((i) => i.variantId !== variantId) });
      },

      clearCart: () => set({ items: [] }),

      getWhatsAppOrderUrl: () => generateWhatsAppMessage(get().items),
    }),
    {
      name: "shopify-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
