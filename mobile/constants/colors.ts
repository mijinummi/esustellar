export const Colors = {
  light: {
    background: "#FFFFFF",
    card: "#F8FAFC",
    text: "#111827",
    textSecondary: "#6B7280",
    border: "#E5E7EB",

    primary: "#2563EB",
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
  },

  dark: {
    background: "#0F172A",
    card: "#1E293B",
    text: "#F8FAFC",
    textSecondary: "#94A3B8",
    border: "#334155",

    primary: "#3B82F6",
    success: "#34D399",
    warning: "#FBBF24",
    danger: "#F87171",
  },
} as const;

export type ThemeMode =
  | "light"
  | "dark";