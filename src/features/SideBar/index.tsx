import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import clsx from "clsx";

import type { RootState } from "@/redux/store";

import useWindowWidth from "@/hook/useWindowWidth";

import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";
import Profile from "@/components/Profile";

import { CurrentMenu, menuItems } from "@/variables/Menu";

export const SideBar = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const width = useWindowWidth();

  const [currentMenu, setCurrentMenu] = useState<CurrentMenu>(CurrentMenu.HOME);
  const [isExpand, setIsExpand] = useState(false);

  const handleMenu = (menu: CurrentMenu) => {
    setCurrentMenu(menu);
  };

  useEffect(() => {
    if (width && width > 1265) {
      setIsExpand(true);
    } else {
      setIsExpand(false);
    }
  }, [width]);

  return (
    <div
      className={clsx(
        "hidden md:block w-full transition-all",
        isExpand ? "max-w-61" : "max-w-18"
      )}
    >
      <div className="flex flex-col justify-between border-r border-gray-300 px-3 pt-2 pb-5 h-screen sticky top-0">
        <div>
          {/* ----- Logo ----- */}
          <div
            className={clsx(
              isExpand ? "pt-7 pb-4 px-2 mb-3" : "mt-3 pt-4 pb-9 px-3"
            )}
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
          {/* ----- Logo End ----- */}

          {/* ----- Menu Midden ----- */}
          {menuItems.map((item) => (
            <Button
              key={item.menu}
              className={clsx(
                "w-full text-left gap-4 p-3",
                isExpand ? "my-1" : "my-2.5"
              )}
              left
              onClick={() => handleMenu(item.menu)}
            >
              <Image
                src={item.icon}
                alt={`${item.menu}-icon`}
                height={22}
                width={22}
              />
              {isExpand && (
                <SubTitle
                  className={clsx(!isExpand && "hidden")}
                  size="lg"
                  bold={currentMenu === item.menu}
                >
                  {item.label}
                </SubTitle>
              )}
            </Button>
          ))}

          <Button
            className="w-full text-left gap-4 my-1 p-3"
            left
            onClick={() => handleMenu(CurrentMenu.PROFILE)}
          >
            {posts[0] && (
              <Profile url={posts[0].url} id={posts[0].id} size="xs" />
            )}
            {isExpand && (
              <SubTitle size="lg" bold={currentMenu === CurrentMenu.PROFILE}>
                โปรไฟล์
              </SubTitle>
            )}
          </Button>
          {/* ----- Menu Midden End ----- */}
        </div>

        {/* ----- Menu Bottom ----- */}
        <Button className="w-full text-left gap-4 my-1 p-3" left>
          <Image
            src="/img/menu-icon.png"
            alt="menu-icon"
            height={22}
            width={22}
          />
          {isExpand && (
            <SubTitle size="lg" bold={currentMenu === CurrentMenu.PROFILE}>
              เพิ่มเติม
            </SubTitle>
          )}
        </Button>
        {/* ----- Menu Bottom End ----- */}
      </div>
    </div>
  );
};
