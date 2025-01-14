import React, { FC, PropsWithChildren, useMemo } from "react";
import clsx from "clsx";

export type SubTitleProps = {
  className?: string;
  size?: "sm" | "base" | "lg";
  gray?: boolean;
  truncate?: boolean;
} & PropsWithChildren;

const SubTitle: FC<SubTitleProps> = ({
  children,
  className,
  gray,
  size,
  truncate,
}) => {
  const sizeClass = useMemo(() => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "lg":
        return "text-lg";
      default:
        return "text-base";
    }
  }, [size]);

  const customClass = clsx(
    className,
    truncate && "truncate",
    "break-words",
    gray && "text-gray-500",
    sizeClass
  );

  return <div className={clsx(customClass, "font-normal")}>{children}</div>;
};

export default SubTitle;
