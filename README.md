# Portfolio Website Installation and Setup Guide

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (usually comes with Node.js)
- Git (for version control)

## Step 1: Clone the Repository

If you haven't already, create a new repository for your portfolio project. Then, clone it to your local machine:

```
git clone https://github.com/yourusername/your-portfolio-repo.git
cd your-portfolio-repo
```

## Step 2: Initialize the Next.js Project

Create a new Next.js project with TypeScript:

```
npx create-next-app@latest .
```

When prompted, choose the following options:
- Would you like to use TypeScript? » Yes
- Would you like to use ESLint? » Yes
- Would you like to use Tailwind CSS? » Yes
- Would you like to use `src/` directory? » No
- Would you like to use App Router? » Yes
- Would you like to customize the default import alias? » No

## Step 3: Install Additional Dependencies

Install the required packages for the portfolio website:

```
npm install @radix-ui/react-icons lucide-react next-themes framer-motion
```

## Step 4: Set Up shadcn/ui

Install and set up shadcn/ui components:

```
npx shadcn@latest init
```

When prompted, choose the following options:
- Would you like to use TypeScript (recommended)? » yes
- Which style would you like to use? » Default
- Which color would you like to use as base color? » Slate
- Where is your global CSS file? » app/globals.css
- Do you want to use CSS variables for colors? » yes
- Where is your tailwind.config.js located? » tailwind.config.js
- Configure the import alias for components: » @/components
- Configure the import alias for utils: » @/lib/utils
- Are you using React Server Components? » yes

## Step 5: Install Required shadcn/ui Components

Install the necessary shadcn/ui components:

```
npx shadcn@latest add button card input textarea
```

## Step 6: Update Configuration Files

### Update `tailwind.config.js`

Replace the content of `tailwind.config.js` with:

```javascript
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Update `app/layout.tsx`

Replace the content of `app/layout.tsx` with:

```tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Web Developer & Designer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Step 7: Create Theme Provider Component

Create a new file `components/theme-provider.tsx` and add the following content:

```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

## Step 8: Add Portfolio Component

Replace the content of `app/page.tsx` with the portfolio component code provided earlier.

## Step 9: Run the Development Server

Start the development server to see your portfolio website in action:

```
npm run dev
```

Your portfolio website should now be running on `http://localhost:3000`.

## Step 10: Customize Content

Update the portfolio component in `app/page.tsx` with your personal information:

- Replace "Your Name" with your actual name
- Update the skills and project information
- Add your own GitHub and LinkedIn profile URLs
- Implement the contact form functionality (you may need to set up a backend API or use a form service)
- Add your own project links and live demo URLs

## Step 11: Deploy Your Portfolio

Once you're satisfied with your portfolio, you can deploy it to a hosting platform like Vercel:

1. Push your code to a GitHub repository
2. Sign up for a Vercel account at https://vercel.com
3. Connect your GitHub account to Vercel
4. Import your portfolio repository
5. Follow the deployment steps provided by Vercel

Your portfolio website will now be live and accessible to the world!
