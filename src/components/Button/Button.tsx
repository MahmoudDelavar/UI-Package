import { ReactNode } from 'react';

type ButtonProp = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProp) => {
  return <button>{children}</button>;
};
