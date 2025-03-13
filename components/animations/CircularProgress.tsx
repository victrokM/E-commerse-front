import clsx from 'clsx';
import React, { JSX } from 'react';

interface Props {
  size?: number;
}

export default function CircularProgress({ size = 41 }: Props): JSX.Element {
  return (
    <div
      className="lds-ring inline-block relative"
      style={{
        width: size,
        height: size
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className={clsx(
            'border-box block absolute m-2 rounded-[50%] animate-ring border-[3px] border-solid'
          )}
          style={{
            width: size - 16,
            height: size - 16
          }}
        />
      ))}
    </div>
  );
}
