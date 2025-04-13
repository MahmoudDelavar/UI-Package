import { ReactNode } from 'react';

export type ButtonProp = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProp) => {
  return <button className='mb-3'>{children}</button>;
};
