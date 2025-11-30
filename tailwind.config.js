module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primaryText: {
          DEFAULT: "#39FF14",
        },
        "custom-green": {
          DEFAULT: "#39FF14",
        },
        custom: {
          DEFAULT: "#F8F8FA",
        },
        primary: {
          DEFAULT: "#00A651",
          50: "#E6F7ED",
          100: "#CCEFDB",
          200: "#99DFB7",
          300: "#66CF93",
          400: "#33BF6F",
          500: "#00A651",
          600: "#008541",
          700: "#006431",
          800: "#004221",
          900: "#002110",
        },
        secondary: {
          DEFAULT: "#F14D4A",
          50: "#FFE6CC",
          100: "#FFCC99",
          200: "#FFB366",
          300: "#FF9933",
          400: "#FF8000",
          500: "#FF6600",
          600: "#CC5200",
          700: "#993D00",
          800: "#662900",
          900: "#331400",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
        sans: ["Tajawal", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1140px",
        // "3xl": "1850px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1140px",
      "2xl": "1536px",
      "3xl": "1440px",
    },
  },
  plugins: [],
  darkMode: ["class"],
};
