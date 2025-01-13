import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type SubTitleProps = {
  className?: string;
  size?: "sm" | "base" | "lg";
  gray?: boolean;
} & PropsWithChildren;

const SubTitle: FC<SubTitleProps> = ({ children, className, gray, size }) => {
  const customClass = clsx(
    className,
    "break-words",
    gray && "text-gray-500",
    size && `text-${size}`
  );

  return <div className={clsx(customClass, "font-normal")}>{children}</div>;
};

export default SubTitle;
