import React, { FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface LogoProps {
  isExpand: boolean;
}

export const Logo: FC<LogoProps> = ({ isExpand }) => {
  return (
    <div
      className={clsx(isExpand ? "pt-7 pb-4 px-2 mb-3" : "mt-3 pt-4 pb-9 px-3")}
    >
      {isExpand ? (
        <Image
          priority
          src="/img/instagram_logo.svg"
          alt="instagram_logo"
          height={37}
          width={109}
        />
      ) : (
        <Image
          priority
          src="/img/instagram_mini_logo.svg"
          alt="instagram_mini_logo"
          height={24}
          width={24}
        />
      )}
    </div>
  );
};
