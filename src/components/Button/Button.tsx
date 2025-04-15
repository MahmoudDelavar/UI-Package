'use client';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import { getButtonClassNames } from './libs';

export type ButtonProperties = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> &
  VariantProps<typeof getButtonClassNames> & {
    asChild?: boolean;
    size?: 'lg' | 'md' | 'sm';
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
  (
    {
      asChild = false,
      className,
      disabled = false,
      intent = 'primary',
      size = 'md',
      ...properties
    },
    reference,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        disabled={Boolean(disabled)}
        ref={reference}
        className={cn(
          getButtonClassNames({
            className,
            disabled,
            intent,
          }),
          {
            'rounded-lg px-6 py-2 text-lg font-bold': size === 'lg',
            'rounded-md px-5 py-2 text-base font-bold': size === 'md',
            'rounded-sm px-3 py-1 text-sm font-medium': size === 'sm',
          },
        )}
        {...properties}
      />
    );
  },
);

// eslint-disable-next-line functional/immutable-data
Button.displayName = 'Button';
