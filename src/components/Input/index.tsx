import React, { FC } from "react";
import clsx from "clsx";

export type InputProps = {
  className?: string;
  theme?: "primary";
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClean?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  isMobile?: boolean;
};

const Input: FC<InputProps> = ({
  className,
  type,
  onChange,
  onFocus,
  onBlur,
  theme = "primary",
  autoFocus,
  name,
  id,
  value,
  placeholder,
  prefix,
  isMobile,
}) => {
  const themeClasses = {
    primary: "bg-stone-100",
  };

  return (
    <div className="flex items-center">
      {prefix && (
        <div
          className={clsx(
            "flex items-center bg-stone-100 rounded-l-lg",
            isMobile ? "h-9 pl-2" : "pl-4 -mt-6 h-10"
          )}
        >
          {prefix}
        </div>
      )}
      <input
        className={clsx(
          "px-4 py-1 focus:outline-none",
          themeClasses[theme],
          className,
          prefix ? "rounded-r-lg" : "rounded-lg"
        )}
        type={type}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e)}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
