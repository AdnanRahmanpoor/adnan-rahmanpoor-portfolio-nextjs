/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{ts,tsx}',
	  './components/**/*.{ts,tsx}',
	  './app/**/*.{ts,tsx}',
	  './src/**/*.{ts,tsx}',
	  ],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
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
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		  'glitch-1': {
          '0%, 100%': { transform: 'none' },
          '20%': { transform: 'skew(-5deg)' },
          '40%': { transform: 'translate(-3px, 2px) skew(2deg)' },
          '60%': { transform: 'translate(1px, -1px) skew(-1deg)' },
          '80%': { transform: 'skew(3deg)' }
        },
        'glitch-2': {
          '0%, 100%': { transform: 'none' },
          '25%': { transform: 'translate(-2px, -2px)' },
          '50%': { transform: 'translate(2px, 2px)' },
          '75%': { transform: 'translate(-2px, 2px)' }
        },
        'glitch-3': {
          '0%, 100%': { transform: 'none' },
          '25%': { transform: 'translate(2px, 2px)' },
          '50%': { transform: 'translate(-2px, -2px)' },
          '75%': { transform: 'translate(2px, -2px)' }
        },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		  'glitch-1': 'glitch-1 0.3s infinite',
        'glitch-2': 'glitch-2 0.3s infinite',
        'glitch-3': 'glitch-3 0.3s infinite',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }