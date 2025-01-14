import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import type { RootState } from "@/redux/store";

import useWindowWidth from "@/hook/useWindowWidth";

import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";
import Profile from "@/components/Profile";

enum CurrentMenu {
  HOME = "home",
  SEARCH = "search",
  EXPLORE = "explore",
  REELS = "reels",
  MESSAGE = "message",
  LIKE = "like",
  ADD = "add",
  PROFILE = "profile",
}

export const SideBar = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const width = useWindowWidth();

  const [currentMenu, setCurrentMenu] = useState<CurrentMenu>(CurrentMenu.HOME);

  const handleMenu = (menu: CurrentMenu) => {
    setCurrentMenu(menu);
  };

  return (
    <div className="flex flex-col justify-between border-r border-black px-3 pt-2 pb-5 h-screen sticky top-0">
      <div>
        <div>{width}</div>
        <div className="pt-7 pb-4 px-2 mb-3">
          <Image
            priority
            src="/img/instagram_logo.svg"
            alt="instagram_logo"
            height={37}
            width={109}
          />
        </div>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.HOME)}
        >
          <Image
            src="/img/home-icon.png"
            alt="home-icon"
            height={22}
            width={22}
          />
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.HOME}>
            หน้าหลัก
          </SubTitle>
        </Button>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.SEARCH)}
        >
          <Image
            src="/img/search-icon.png"
            alt="search-icon"
            height={22}
            width={22}
          />
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.SEARCH}>
            ค้นหา
          </SubTitle>
        </Button>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.EXPLORE)}
        >
          <Image
            src="/img/explore-icon.png"
            alt="explore-icon"
            height={22}
            width={22}
          />
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.EXPLORE}>
            สำรวจ
          </SubTitle>
        </Button>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.REELS)}
        >
          <Image
            src="/img/reels-icon.png"
            alt="reels-icon"
            height={22}
            width={22}
          />
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.REELS}>
            Reels
          </SubTitle>
        </Button>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.MESSAGE)}
        >
          <Image
            src="/img/chat-icon.png"
            alt="chat-icon"
            height={22}
            width={22}
          />
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.MESSAGE}>
            ข้อความ
          </SubTitle>
        </Button>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.LIKE)}
        >
          <Image
            src="/img/like-icon.png"
            alt="like-icon"
            height={22}
            width={22}
          />
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.LIKE}>
            การแจ้งเตือน
          </SubTitle>
        </Button>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.ADD)}
        >
          <Image
            src="/img/add-icon.png"
            alt="add-icon"
            height={22}
            width={22}
          />
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.ADD}>
            สร้าง
          </SubTitle>
        </Button>

        <Button
          className="w-full text-left gap-4 my-1 p-3"
          left
          onClick={() => handleMenu(CurrentMenu.PROFILE)}
        >
          {posts[0] && (
            <Profile url={posts[0].url} id={posts[0].id} size="xs" />
          )}
          <SubTitle size="lg" bold={currentMenu === CurrentMenu.PROFILE}>
            โปรไฟล์
          </SubTitle>
        </Button>
      </div>

      <Button className="w-full text-left gap-4 my-1 p-3" left>
        <Image
          src="/img/menu-icon.png"
          alt="menu-icon"
          height={22}
          width={22}
        />
        <SubTitle size="lg" bold={currentMenu === CurrentMenu.PROFILE}>
          เพิ่มเติม
        </SubTitle>
      </Button>
    </div>
  );
};
