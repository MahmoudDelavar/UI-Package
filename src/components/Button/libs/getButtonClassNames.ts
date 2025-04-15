/* eslint-disable perfectionist/sort-objects */
import { cva } from 'class-variance-authority';

export const getButtonClassNames = cva('transition-colors', {
  defaultVariants: {
    disabled: false,
    intent: 'primary',
  },
  variants: {
    disabled: {
      false: '',
      true: [
        '!bg-primary-disabled !text-disabled',
        'hover:!bg-primary-disabled active:!bg-primary-disabled',
      ],
    },
    intent: {
      primary: [
        'bg-primary text-inverse',
        'hover:bg-primary-hover',
        'active:bg-primary-pressed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-focused',
      ],
      secondary: [
        'bg-secondary text-inverse',
        'hover:bg-secondary-hover',
        'active:bg-secondary-pressed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-focused',
      ],
      neutral: [
        'bg-neutral text-body',
        'hover:bg-neutral-disabled',
        'active:bg-neutral-pressed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-focused',
      ],
      warning: [
        'bg-warning text-inverse',
        'hover:bg-warning-hover',
        'active:bg-warning-pressed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warning-focused',
      ],
      danger: [
        'bg-danger text-inverse',
        'hover:bg-danger-hover',
        'active:bg-danger-pressed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger-focused',
      ],
      outline: [
        'border-2 text-success',
        'hover:border-2 hover:border-primary-hover hover:bg-primary-hover hover:text-inverse',
        'active:border-2 active:border-primary-pressed active:bg-transparent active:text-success',
        'focus-visible:border-2 focus-visible:border-primary-focused focus-visible:outline-none',
      ],
      subtle: [
        'text-success',
        'hover:bg-primary-hover/15 hover:text-success',
        'active:bg-primary-pressed/20 active:text-success',
        'focus-visible:border-2 focus-visible:border-primary-focused/15 focus-visible:outline-none',
      ],
    },
  },
  compoundVariants: [
    {
      intent: 'outline',
      disabled: true,
      className: [
        'border-2 border-disabled !bg-transparent !text-disabled',
        'hover:!border-disabled hover:!bg-transparent active:!bg-transparent',
      ],
    },
    {
      intent: 'subtle',
      disabled: true,
      className: [
        '!bg-transparent !text-disabled',
        'hover:!border-disabled hover:!bg-transparent active:!bg-transparent',
      ],
    },
  ],
});
