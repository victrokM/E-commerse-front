import clsx from 'clsx';
import React, { ChangeEvent, JSX, useState } from 'react';
import ShowPassword from './ShowPassword';
import { CiMail } from 'react-icons/ci';

export default function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [hasValuePass, setHasValuePass] = useState<boolean>(false);
  const [focusPass, setFocusPass] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === 'email') {
      setHasValue(value.length > 0);
    }
    if (name === 'password') {
      setHasValuePass(value.length > 0);
    }
  };
  return (
    <div>
      <div className="mb-5 text-2xl font-semibold text-gray-400 whitespace-nowrap mt-5">
        Sign in
      </div>
      <div className="flex w-full items-center gap-3 flex-col">
        <div className="relative">
          <label
            htmlFor="user"
            className={clsx(
              'my-1 label w-fit absolute bg-white transition-all duration-200',
              focus &&
                (hasValue || !hasValue) &&
                '-translate-y-3 text-[10px] text-cyan-700 font-bold left-2 px-1 bg-white',
              !focus &&
                hasValue &&
                '-translate-y-3 text-[10px] text-stone-400 font-bold left-2 px-1 bg-white"',
              !focus &&
                !hasValue &&
                ' bottom-3 text-[13px] text-stone-400 font-bold left-2 px-1 bg-white"'
            )}
          >
            Username*
          </label>
          <input
            type="user"
            id="user"
            name="email"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={clsx(
              'focus:border-cyan-700 bg-white pr-10 w-full lg:w-[280px] focus:border-[1px] focus:outline-none text-sm px-3 py-4 z-20 border-[1px]  rounded-md'
            )}
            onChange={handleChange}
          />
          <CiMail className="text-xl absolute top-4 right-1 text-black mr-2" />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className={clsx(
              'my-1  label w-fit  bg-white absolute transition-all duration-200',
              focusPass &&
                (hasValuePass || !hasValuePass) &&
                '-translate-y-3 text-[10px] text-cyan-700 font-bold left-2 px-1 bg-white',
              !focusPass &&
                hasValuePass &&
                '-translate-y-3 text-[10px] text-stone-400 font-bold left-2 px-1 bg-white"',
              !focusPass &&
                !hasValuePass &&
                ' bottom-3 text-[13px] text-stone-400 font-bold left-2 px-1 bg-white"'
            )}
          >
            Password*
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            onFocus={() => setFocusPass(true)}
            onBlur={() => setFocusPass(false)}
            className={clsx(
              'focus:border-cyan-700 pr-10 text-sm w-full lg:w-[280px] bg-white focus:border-[1px] focus:outline-none px-3 py-4 z-20 border-[1px]  rounded-md'
            )}
            onChange={handleChange}
          />
          <div className="absolute top-3 right-2">
            <ShowPassword
              show={showPassword}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      <div className="w-[280px] flex justify-center items-center px-8 lg:px-0 mb-5">
        <button
          type="submit"
          className={clsx(
            'rounded-lg py-2 mt-5 w-[150px] text-sm shadow-xl hover:scale-110 transition-all duration-100'
          )}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
