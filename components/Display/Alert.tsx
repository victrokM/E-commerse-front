import React, { JSX } from 'react';
import { MdErrorOutline } from 'react-icons/md';

interface Props {
  children: React.ReactNode;
}

export default function Alert({ children }: Props): JSX.Element {
  return (
    <div className="my-1.5 p-3 w-full flex bg-error-background items-center rounded-md">
      <div className="mr-2.5">
        <MdErrorOutline className="text-error text-xl" />
      </div>
      <span className="block text-error-font text-xs font-normal">
        {children}
      </span>
    </div>
  );
}
