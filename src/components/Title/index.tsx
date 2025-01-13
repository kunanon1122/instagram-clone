import React, { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export type TitleProps = {
  className?: string;
} & PropsWithChildren;

const Title: FC<TitleProps> = ({ children, className }) => {
  const customClass = clsx(className, "font-semibold break-words text-base");

  return <div className={customClass}>{children}</div>;
};

export default Title;
