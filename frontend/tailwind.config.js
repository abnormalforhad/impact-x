/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode background
        light: {
          50: "#FFFFFF",
          100: "#FAFAF9",
          200: "#F5F5F4",
          300: "#E7E5E4",
          400: "#D6D3D1",
        },
        // Primary - Electric cyan/teal
        primary: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
        // Secondary - Warm Gray/Stone
        secondary: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },
        // Dark background colors - Cool slate
        dark: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // Success - Warm Green
        success: {
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
        },
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(6, 182, 212, 0.35)",
        "glow-lg": "0 0 40px rgba(6, 182, 212, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.25)" },
          "100%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: {
        "mesh-gradient": "radial-gradient(at 40% 20%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(34, 211, 238, 0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.06) 0px, transparent 50%)",
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "48px 48px",
      },
    },
  },
  plugins: [],
};
