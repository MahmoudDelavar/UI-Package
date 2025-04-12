import { ReactNode } from 'react';

export type ButtonProp = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProp) => {
  return <button>{children}</button>;
};
