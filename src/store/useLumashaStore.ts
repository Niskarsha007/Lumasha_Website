import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/content';

export type Language = 'en' | 'ne' | 'hi' | 'gu' | 'en-US';

type CartItem = Product & { quantity: number };

interface LumashaState {
  cart: CartItem[];
  language: Language;
  soundEnabled: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  toggleSound: () => void;
  setLanguage: (lng: Language) => void;
  clearCart: () => void;
}

export const useLumashaStore = create<LumashaState>()(
  persist(
    (set) => ({
      cart: [],
      language: 'en',
      soundEnabled: true,
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((c) => c.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((c) =>
                c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
              )
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((c) => c.id !== id) })),
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      setLanguage: (lng) => set({ language: lng }),
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'lumasha-store'
    }
  )
);
