import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  number?: boolean;
  type?: "text" | "date" | "number" | "email";
  disabled?: boolean;
  read?: boolean;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  error,
  number,
  type = "text",
  disabled = false,
  read = false,
}: Props) {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="relative">
        <label
          htmlFor={name}
          className={clsx(
            "my-1  label w-fit  bg-[#FAFAFA]   transition-all duration-200",
            focus &&
              (value || !value) &&
              "-translate-y-6 text-[10px] text-[#9C00E2] font-bold left-2 px-1 bg-[#FAFAFA]",
            !focus &&
              value &&
              !error &&
              '-translate-y-6 text-[10px] text-stone-400 font-bold left-2 px-1 bg-[#FAFAFA]"',
            !focus &&
              !value &&
              !error &&
              "text-xs font-medium text-stone-400 left-3 hover:cursor-text",
            error && !focus && "text-red-500 text-xs ",
            error && focus && "text-red-500 text-[10px] -translate-y-5",
            !focus &&
              value &&
              error &&
              "text-red-500 text-[10px] -translate-y-6 font-bold px-1 left-2",
            !focus &&
              !value &&
              error &&
              "text-xs font-medium text-red-500 left-3 hover:cursor-text",
            disabled && "text-gray-400 bg-gray-100"
          )}
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onKeyDown={(e) => {
            if (
              number &&
              !/[0-9]/.test(e.key) &&
              e.key !== "Backspace" &&
              e.key !== "Tab"
            ) {
              e.preventDefault();
            }
          }}
          readOnly={read}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
          className={clsx(
            " bg-[#FAFAFA]  w-full  focus:outline-none text-sm px-3 py-[14px] z-20 border-[1px]  rounded-md",
            error
              ? "border-red-500 focus:border-red-500 focus:border-[1px]"
              : "border-stone-300 hover:border-stone-500 focus:border-[#9C00E2] focus:border-[2px]",
            disabled &&
              "text-gray-400 bg-gray-100 focus:border-none hover:border-none"
          )}
        />
      </div>
    </div>
  );
}
