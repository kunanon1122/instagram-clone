import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import type { RootState } from "@/redux/store";

import Profile from "@/components/Profile";

import { mobileMenuItems } from "@/variables/Menu";

export const MenuBar = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <div className="fixed bottom-0 h-12 w-full -ml-3 bg-white border-t border-gray-300 flex items-center justify-around">
      {mobileMenuItems.map((item, index) => (
        <Image
          key={`${item.menu}-${index}`}
          src={item.icon}
          alt={`${item.menu}-${index}-icon`}
          height={22}
          width={22}
        />
      ))}
      {posts[0] && <Profile url={posts[0].url} id={posts[0].id} size="xs" />}
    </div>
  );
};
