import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type ButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  theme?: "primary" | "secondary";
  type?: "button" | "submit";
  left?: boolean;
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  left,
  theme = "primary",
  type = "button",
}) => {
  const themeClasses = {
    primary: "bg-transition hover:bg-gray-100",
    secondary: "bg-core-black-500 text-white",
  };

  return (
    <button
      className={clsx(
        className,
        themeClasses[theme],
        "flex items-center p-1 rounded-lg transition-colors",
        !left && "justify-center"
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
