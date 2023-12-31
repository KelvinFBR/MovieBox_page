import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray_900': "#111827",
        'gray_800': "#1F2937",
        'gray_500': "#6B7280",
        'gray_des': "#f3f4f688",
        'rose_700': "#BE123C",
        'primary_white': "#FFFFFF",
      },
    },
  },
  plugins: [],
}
export default config 
