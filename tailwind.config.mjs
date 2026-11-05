export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "Bricolage Grotesque Variable",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        nota: ["Caveat", "cursive"],
      },
      colors: {
        ameixa: {
          DEFAULT: "#1c0f2e",
          suave: "#4b3a63",
        },
        algodao: "#ffe4f0",
        uva: {
          DEFAULT: "#7c3aed",
          escuro: "#5b21b6",
          profundo: "#4c1d95",
          claro: "#ede4ff",
        },
        rosa: {
          DEFAULT: "#e6007e",
          vivo: "#ff4f9a",
        },
        gema: "#ffd23f",
        papel: "#fdfbff",
      },
      borderRadius: {
        card: "28px",
        button: "999px",
      },
      boxShadow: {
        palco: "0 40px 80px -30px rgba(28, 15, 46, 0.45)",
        suave: "0 12px 30px -12px rgba(28, 15, 46, 0.25)",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(0.6) translateY(-8px)", opacity: "0" },
          "70%": { transform: "scale(1.06)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        flash: {
          "0%": { opacity: "0.95" },
          "100%": { opacity: "0" },
        },
        piscar: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        pop: "pop 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2) both",
        flash: "flash 0.35s ease-out both",
        piscar: "piscar 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
