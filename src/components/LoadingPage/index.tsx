import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import type { RootState } from "@/redux/store";
import clsx from "clsx";
import SubTitle from "../SubTitle";

const LoadingPage = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const [isShowLoading, setIsShowLoading] = useState(true);

  useEffect(() => {
    if (posts.length > 0) {
      setTimeout(() => {
        setIsShowLoading(false);
      }, 2500);
    }
  }, [posts]);

  return (
    <div
      className={clsx(
        "z-50 pb-10 bg-black h-screen w-screen flex flex-col justify-between items-center",
        isShowLoading ? "fixed" : "hidden"
      )}
    >
      <div></div>
      <Image
        src="/img/ig_loading_logo.png"
        alt="ig_loading_logo"
        height={80}
        width={80}
      />
      <div className="flex flex-col justify-center items-center">
        <SubTitle gray bold>
          from
        </SubTitle>
        <SubTitle size="xl" className="text-white">
          Kunanon
        </SubTitle>
      </div>
    </div>
  );
};

export default LoadingPage;
