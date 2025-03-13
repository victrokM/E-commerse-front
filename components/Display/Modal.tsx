import React, { JSX } from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  breakPointWidth?: string;
  close?: boolean;
  padding?: string;
  isCenter?: boolean;
}

export default function Modal({
  children,
  isOpen,
  toggle,
  breakPointWidth = 'sm:w-96',
  close = true,
  padding = 'px-2 py-4',
  isCenter = false
}: Props): JSX.Element | null {
  return isOpen
    ? createPortal(
        <div className="bg-pane fixed top-0 right-0 h-full w-full z-[50] sm:flex sm:justify-center sm:items-center">
          <div
            className="h-full w-full absolute"
            onClick={() => {
              close && toggle();
            }}
          />
          <div
            className={clsx(
              'rounded-lg h-fit w-full flex flex-col bg-white shadow-sm animate-popup fixed bottom-0',
              'sm:relative',
              breakPointWidth
            )}
          >
            <div
              className={clsx(
                padding,
                !isCenter && 'flex flex-col text-center items-center',
                isCenter && 'flex flex-col'
              )}
            >
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('modal') as HTMLElement
      )
    : null;
}
