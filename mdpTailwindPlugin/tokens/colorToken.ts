/* eslint-disable perfectionist/sort-objects */
import { colorPalette as c } from '../primitives';

export const variation = {
  primary: {
    DEFAULT: c.neutral[600],
    hover: c.neutral[600],
    pressed: c.neutral[700],
    focused: c.neutral[700],
    disabled: c.neutral[100],
  },
  secondary: {
    DEFAULT: c.neutral[100],
    hover: c.neutral[200],
    pressed: c.neutral[200],
    focused: c.neutral[200],
    disabled: c.neutral[100],
  },

  danger: {
    DEFAULT: c.rose[400],
    hover: c.rose[600],
    pressed: c.rose[600],
    focused: c.rose[600],
    disabled: c.rose[50],
  },

  warning: {
    DEFAULT: c.amber[400],
    hover: c.amber[600],
    pressed: c.amber[600],
    focused: c.amber[600],
    disabled: c.amber[100],
  },
  success: {
    DEFAULT: c.teal[400],
    hover: c.teal[600],
    pressed: c.teal[600],
    focused: c.teal[600],
    disabled: c.teal[50],
  },
};

export const ColorTokens = {
  background: {
    surface: {
      disable: c.neutral[100],
      danger: c.rose[400],
      warning: c.amber[400],
    },
    ...variation,
  },

  text: {
    body: c.neutral[800],
    subtle: c.black[200],
    inverse: c.white[100],
    disabled: c.neutral[400],
    brand: c.neutral[500],
    ...variation,
  },

  border: {
    DEFAULT: c.neutral[300],
    default: c.neutral[300],
    disabled: c.neutral[400],
    ...variation,
  },
};
