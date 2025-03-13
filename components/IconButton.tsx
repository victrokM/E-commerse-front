import React, { JSX } from 'react';
import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'primary' | 'passwordIcon';

  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  hover?: 'contained' | 'scale' | 'none';
  text?: 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
  padding?: string;
}

export default function IconButton({
  children,
  color = 'primary',
  disabled = false,
  type = 'button',
  hover = 'contained',
  text = 'text-2xl',
  padding = 'p-1.5',
  ...rest
}: Props): JSX.Element {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        padding,
        'rounded-full w-fit h-fit leading-none transition duration-300',
        {
          'text-color-1 hover:bg-primary-hover':
            color === 'primary' && hover === 'contained',
          'text-color-1 hover:scale-125':
            color === 'primary' && hover === 'scale',
          'text-color-68': color === 'passwordIcon',
          'text-neutral-300 hover:bg-transparent hover:text-neutral-300':
            disabled,
          'text-md': text === 'text-md',
          'text-lg': text === 'text-lg',
          'text-xl': text === 'text-xl',
          'text-2xl': text === 'text-2xl',
          'text-3xl': text === 'text-3xl'
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
