import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: string, currencyCode: string, description?: string) {
  const numPrice = Number.parseFloat(amount);
  if (numPrice === 0 && description) {
    const rangeRegex = /(?:[$€£¥₹]|USD|EUR|GBP|JPY|INR)\s*[\d,]+(?:\.\d+)?\s*(?:-|to)\s*(?:[$€£¥₹]|USD|EUR|GBP|JPY|INR)?\s*[\d,]+(?:\.\d+)?/i;
    const match = description.match(rangeRegex);
    if (match) {
      return match[0];
    }
    const singleRegex = /(?:[$€£¥₹]|USD|EUR|GBP|JPY|INR)\s*[\d,]+(?:\.\d+)?/i;
    const singleMatch = description.match(singleRegex);
    if (singleMatch) {
      return singleMatch[0];
    }
  }
  return `${currencyCode} ${numPrice.toFixed(2)}`;
}
