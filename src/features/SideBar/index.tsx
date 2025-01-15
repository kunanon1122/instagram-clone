import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import clsx from "clsx";

import { setIsExpand } from "@/redux/reducers/menuSlice";
import type { RootState } from "@/redux/store";

import useWindowWidth from "@/hook/useWindowWidth";

import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";
import Profile from "@/components/Profile";

import { Logo } from "@/features/SideBar/Logo";
import { More } from "@/features/SideBar/More";
import { Search } from "@/features/SideBar/Search";

import { CurrentMenu, menuItems } from "@/variables/Menu";

export const SideBar = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const isExpand = useSelector((state: RootState) => state.menu.isExpand);
  const dispatch = useDispatch();
  const width = useWindowWidth();

  const divRef = useRef<HTMLDivElement>(null);

  const [currentMenu, setCurrentMenu] = useState<CurrentMenu>(CurrentMenu.HOME);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleChangeIsOpenSearch = useCallback(
    (prev: boolean) => {
      if (prev) {
        if (width && width > 1265) dispatch(setIsExpand(true));
        setCurrentMenu(CurrentMenu.HOME);

        return false;
      } else {
        dispatch(setIsExpand(false));

        return true;
      }
    },
    [dispatch, width]
  );

  const handleMenu = useCallback(
    (menu: CurrentMenu) => {
      setCurrentMenu(menu);

      if (menu === CurrentMenu.SEARCH) {
        setIsOpenSearch((prev) => {
          const state = handleChangeIsOpenSearch(prev);
          return state;
        });
      } else {
        setIsOpenSearch(false);
      }
    },
    [handleChangeIsOpenSearch]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        handleMenu(CurrentMenu.SEARCH);
      }
    };

    if (isOpenSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleMenu, isOpenSearch]);

  useEffect(() => {
    if (width && width > 1265 && !isOpenSearch) {
      dispatch(setIsExpand(true));
    } else {
      dispatch(setIsExpand(false));
    }
  }, [dispatch, isOpenSearch, width]);

  return (
    <div
      ref={divRef}
      className={clsx(
        "hidden md:block w-full transition-all",
        isExpand ? "max-w-61" : "max-w-18"
      )}
    >
      <div className="h-screen sticky z-20 top-0 flex flex-col justify-between border-r border-gray-300 bg-white px-3 pt-2 pb-5">
        <div>
          <Logo isExpand={isExpand} />

          {menuItems.map((item) => (
            <Button
              key={item.menu}
              className={clsx(
                "w-full text-left gap-4 p-3",
                isExpand ? "my-1" : "my-2.5",
                isOpenSearch &&
                  item.menu === CurrentMenu.SEARCH &&
                  "border border-gray-300"
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
        </div>

        <More isExpand={isExpand} currentMenu={currentMenu} />
      </div>

      <Search isOpenSearch={isOpenSearch} />
    </div>
  );
};
