/**
 * Theme constants for consistent styling across components
 */

export const COLORS = {
  background: {
    primary: "#0A0A0A",
    secondary: "#1A1A1A",
    tertiary: "#2A2A2A",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.7)",
    tertiary: "rgba(255, 255, 255, 0.5)",
  },
  accent: {
    primary: "#9333EA",
    hover: "rgba(147, 51, 234, 0.2)",
    light: "rgba(147, 51, 234, 0.1)",
  },
  border: {
    default: "rgba(255, 255, 255, 0.12)",
    hover: "rgba(255, 255, 255, 0.3)",
  },
} as const;

export const SPACING = {
  borderRadius: {
    small: 2,
    medium: 3,
    large: 12,
  },
  padding: {
    button: { x: 4, y: 1.5 },
    tile: 2,
  },
} as const;

export const TYPOGRAPHY = {
  fontSize: {
    xs: { xs: "0.875rem", sm: "1rem" },
    sm: { xs: "1rem", sm: "1.125rem" },
    md: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
  },
  fontWeight: {
    normal: 500,
    semibold: 600,
  },
} as const;

