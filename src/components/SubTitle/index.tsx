import React, { FC, PropsWithChildren, useMemo } from "react";
import clsx from "clsx";

export type SubTitleProps = {
  className?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2.5xl";
  gray?: boolean;
  bold?: boolean;
  truncate?: boolean;
} & PropsWithChildren;

const SubTitle: FC<SubTitleProps> = ({
  children,
  className,
  gray,
  size,
  bold,
  truncate,
}) => {
  const sizeClass = useMemo(() => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2.5xl":
        return "text-2.5xl";
      default:
        return "text-base";
    }
  }, [size]);

  const customClass = clsx(
    className,
    truncate && "truncate",
    "break-words",
    gray && "text-gray-500",
    bold && "font-semibold",
    sizeClass
  );

  return <div className={clsx(customClass, "font-normal")}>{children}</div>;
};

export default SubTitle;
