/** @type {import('tailwindcss').Config} */

import { mdpTailwindPlugin } from './mdpTailwindPlugin';

export default {
  content: ['./src/**/*.{ts,tsx}', '.storybook/*.ts'],
  plugins: [mdpTailwindPlugin()],
};
