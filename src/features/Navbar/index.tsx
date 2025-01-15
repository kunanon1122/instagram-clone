import React from "react";
import Image from "next/image";

import { Logo } from "@/components/Icon";

import { SearchInput } from "@/features/Search";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full">
      <Logo width="109" height="37" />
      <div className="flex items-center gap-4">
        <SearchInput isOpenSearch isMobile />
        <Image
          src="/img/like-icon.png"
          alt="like-icon.png"
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};
