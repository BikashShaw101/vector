import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";

const COLORS = [
  "#D97706",
  "#DC2626",
  "#059669",
  "#7C3AED",
  "#DB2777",
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIDToColor (connectionID: number): string {
  return COLORS[connectionID % COLORS.length]
}