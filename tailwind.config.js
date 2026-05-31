/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── shadcn/ui semantic ── */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        /* ── App semantic tokens (namespaced to avoid shadcn collisions) ── */
        app: {
          page: "var(--app-page)",
          surface: "var(--app-surface)",
          elevated: "var(--app-elevated)",
          inset: "var(--app-inset)",
          inverse: "var(--app-inverse)",
          overlay: "var(--app-overlay)",
          code: "var(--app-code-bg)",
          "code-header": "var(--app-code-header)",
          "code-text": "var(--app-code-text)",
          "surface-card": "var(--app-surface-card)",
          "surface-card-hover": "var(--app-surface-card-hover)",
          "surface-chapter": "var(--app-surface-chapter)",
          "surface-input": "var(--app-surface-input)",
          heading: "var(--app-text-heading)",
          body: "var(--app-text-body)",
          muted: "var(--app-text-muted)",
          subtle: "var(--app-text-subtle)",
          disabled: "var(--app-text-disabled)",
          default: "var(--app-border-default)",
          strong: "var(--app-border-strong)",
          "border-subtle": "var(--app-border-subtle)",
          accent: {
            DEFAULT: "var(--app-accent)",
            hover: "var(--app-accent-hover)",
            subtle: "var(--app-accent-subtle)",
            muted: "var(--app-accent-muted)",
            foreground: "var(--app-on-accent)",
          },
          primary: {
            DEFAULT: "var(--app-primary)",
            hover: "var(--app-primary-hover)",
            subtle: "var(--app-primary-subtle)",
            muted: "var(--app-primary-muted)",
            foreground: "var(--app-on-primary)",
          },
          success: {
            DEFAULT: "var(--app-success)",
            subtle: "var(--app-success-subtle)",
            foreground: "var(--app-on-success)",
          },
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Nunito Sans"', 'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', 'monospace'],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      maxWidth: {
        content: "780px",
        wide: "960px",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      transitionTimingFunction: {
        default: "var(--ease-default)",
        out: "var(--ease-out)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
