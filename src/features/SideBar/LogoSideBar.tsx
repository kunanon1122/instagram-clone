import React, { FC } from "react";
import clsx from "clsx";

import { Logo, MiniLogo } from "@/components/Icon";

interface LogoProps {
  isExpand: boolean;
}

export const LogoSideBar: FC<LogoProps> = ({ isExpand }) => {
  return (
    <div
      className={clsx(isExpand ? "pt-7 pb-4 px-2 mb-3" : "mt-3 pt-4 pb-9 px-3")}
    >
      {isExpand ? (
        <Logo width="109" height="37" />
      ) : (
        <MiniLogo width="24" height="24" />
      )}
    </div>
  );
};
