import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}