// React
import React, { JSX } from 'react';

// Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import IconButton from './IconButton';

interface Props {
  show: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ShowPassword({ show, onClick }: Props): JSX.Element {
  return (
    <IconButton onClick={onClick} color="passwordIcon">
      {show ? (
        <AiOutlineEye className="text-xl text-[#9C00E2]" />
      ) : (
        <AiOutlineEyeInvisible className="text-xl text-stone-500" />
      )}
    </IconButton>
  );
}
