import React, { forwardRef, JSX } from 'react';
// import clsx from 'clsx';
import clsx from 'clsx';
import CircularProgress from './animations/CircularProgress';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  opacity?: string;
  font?: string;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    loading = false,
    disabled = false,
    font = 'text-md',
    // padding = 'p-1.5',
    opacity = 'opacity-100',
    ...rest
  },
  ref
): JSX.Element {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      className={clsx(
        'w-full whitespace-nowrap h-fit transition duration-300 disabled:bg-[rgba(0,_0,_0,_0.12)] bg-slate-800 text-white p-2 rounded-md',
        font,
        opacity
      )}
      {...rest}
    >
      <div className="flex items-center justify-center">
        {loading && (
          <div className="flex justify-center mr-1">
            <CircularProgress />
          </div>
        )}
        {children}
      </div>
    </button>
  );
});

export default Button;
