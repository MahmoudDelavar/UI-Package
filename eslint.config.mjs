import { initializeConfig } from 'mdp-eslint-config';

const baseConfig = initializeConfig({
  disableHeavyRules: false,
  enableNextJs: false,
  enablePrettier: false,
  enableReact: false,
  enableStorybook: true,
  enableStylistic: true,
  enableTailwind: true,
  enableTypescript: true,
  projectPathAliasRegex: '',
  typescriptOptions: {
    tsconfigRootDir: process.cwd(),
  },
});

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
  },
  ...baseConfig,
];
