/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', '.storybook/*.ts'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'body': '#111827',
        'danger': '#ef4444',
        'danger-focused': '#f87171',
        'danger-hover': '#dc2626',
        'danger-pressed': '#b91c1c',

        'disabled': '#9ca3af',
        'inverse': '#ffffff',
        'neutral': '#f3f4f6',
        'neutral-disabled': '#e5e7eb',

        'neutral-focused': '#9ca3af',
        'neutral-pressed': '#d1d5db',
        'primary': '#3b82f6',
        'primary-disabled': '#93c5fd',

        'primary-focused': '#60a5fa',
        'primary-hover': '#2563eb',
        'primary-pressed': '#1d4ed8',
        'secondary': '#9333ea',

        'secondary-focused': '#a78bfa',
        'secondary-hover': '#7e22ce',
        'secondary-pressed': '#6b21a8',
        'success': '#10b981',

        'warning': '#facc15',
        'warning-focused': '#fde68a',
        'warning-hover': '#eab308',
        'warning-pressed': '#ca8a04',
      },
    },
  },
};
