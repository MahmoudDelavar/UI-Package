import plugin from 'tailwindcss/plugin';
import { type Config } from 'tailwindcss';
import { BreakpointTokens, ColorTokens } from './tokens';

const getBaseConfig = (): Partial<Config> => ({
  theme: {
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
    },
    extend: {
      backgroundColor: ColorTokens.background,
      borderColor: ColorTokens.border,
      fill: ColorTokens.background,
      outlineColor: ColorTokens.border,
      ringColor: ColorTokens.border,
      ringOffsetColor: ColorTokens.border,
      stroke: {
        border: ColorTokens.border,
      },
      textColor: ColorTokens.text,
    },
    screens: BreakpointTokens,
  },
});

export const mdpTailwindPlugin = plugin.withOptions(
  () => () => {},
  () => getBaseConfig(),
);
