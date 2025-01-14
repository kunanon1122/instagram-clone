import React, { FC } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";

import { CurrentMenu } from "@/variables/Menu";

interface MoreProps {
  isExpand: boolean;
  currentMenu: CurrentMenu;
}

export const More: FC<MoreProps> = ({ isExpand, currentMenu }) => {
  return (
    <Button className="w-full text-left gap-4 my-1 p-3" left>
      <Image src="/img/menu-icon.png" alt="menu-icon" height={22} width={22} />
      {isExpand && (
        <SubTitle size="lg" bold={currentMenu === CurrentMenu.PROFILE}>
          เพิ่มเติม
        </SubTitle>
      )}
    </Button>
  );
};
