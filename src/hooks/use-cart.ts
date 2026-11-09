import { useSyncExternalStore } from "react";
import { products } from "@/data/products";

interface CartEntry {
  id: string;
  quantity: number;
}

export const MAX_CART_QUANTITY = 99;
const STORAGE_KEY = "amrutam-cart-v1";
const emptyCart: CartEntry[] = [];
const listeners = new Set<() => void>();

function readCart(fallback: CartEntry[] = emptyCart): CartEntry[] {
  if (typeof window === "undefined") return emptyCart;
  try {
    const stored: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(stored)) return emptyCart;
    const quantities = new Map<string, number>();
    for (const entry of stored) {
      if (!entry || typeof entry !== "object") continue;
      const { id, quantity } = entry as Partial<CartEntry>;
      if (typeof id !== "string" || !products.some(product => product.id === id)
        || typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 1 || quantity > MAX_CART_QUANTITY) continue;
      quantities.set(id, Math.min(MAX_CART_QUANTITY, (quantities.get(id) ?? 0) + quantity));
    }
    return Array.from(quantities, ([id, quantity]) => ({ id, quantity }));
  } catch {
    return fallback;
  }
}

let entries = readCart();

function publish(next: CartEntry[]) {
  entries = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Keep the cart usable for this session when browser storage is unavailable.
  }
  listeners.forEach(listener => listener());
}

function handleStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY && event.key !== null) return;
  try {
    if (event.storageArea !== window.localStorage) return;
  } catch {
    return;
  }
  entries = readCart();
  listeners.forEach(listener => listener());
}

function subscribe(listener: () => void) {
  if (listeners.size === 0 && typeof window !== "undefined") {
    entries = readCart(entries);
    window.addEventListener("storage", handleStorage);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", handleStorage);
    }
  };
}

function addItem(id: string, quantity = 1): number {
  if (!products.some(product => product.id === id) || !Number.isInteger(quantity) || quantity < 1) return 0;
  const current = entries.find(entry => entry.id === id)?.quantity ?? 0;
  const added = Math.min(quantity, MAX_CART_QUANTITY - current);
  if (added === 0) return 0;
  publish(current === 0
    ? [...entries, { id, quantity: added }]
    : entries.map(entry => entry.id === id ? { ...entry, quantity: current + added } : entry));
  return added;
}

function updateQuantity(id: string, delta: number) {
  if (!Number.isInteger(delta) || !entries.some(entry => entry.id === id)) return;
  publish(entries.map(entry => entry.id === id
    ? { ...entry, quantity: Math.max(1, Math.min(MAX_CART_QUANTITY, entry.quantity + delta)) }
    : entry));
}

function removeItem(id: string) {
  publish(entries.filter(entry => entry.id !== id));
}

export function useCart() {
  const snapshot = useSyncExternalStore(subscribe, () => entries, () => emptyCart);
  const cartItems = snapshot.flatMap(entry => {
    const product = products.find(product => product.id === entry.id);
    return product ? [{ ...product, quantity: entry.quantity }] : [];
  });
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  return { cartItems, itemCount, addItem, updateQuantity, removeItem };
}
