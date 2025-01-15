import React from "react";
import Image from "next/image";

import { SearchInput } from "@/features/Search";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full">
      <Image
        priority
        src="/img/instagram_logo.svg"
        alt="instagram_logo"
        height={37}
        width={109}
      />
      <div className="flex items-center gap-4">
        <div>
          <SearchInput isOpenSearch isMobile />
        </div>
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
