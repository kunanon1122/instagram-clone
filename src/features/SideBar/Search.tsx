import React, { FC } from "react";
import clsx from "clsx";

import SubTitle from "@/components/SubTitle";
import SearchInput from "@/features/SearchInput";

interface SearchProps {
  isOpenSearch: boolean;
}

export const Search: FC<SearchProps> = ({ isOpenSearch }) => {
  return (
    <div
      className={clsx(
        "h-screen top-0 w-99.25 fixed transition-transform duration-300 rounded-r-xl shadow-2xl bg-white border-y border-r z-10",
        isOpenSearch
          ? "transform translate-x-0 left-18"
          : "transform -translate-x-full"
      )}
    >
      <SubTitle className="my-2 pt-3 pl-6 pr-3 pb-7" bold size="2.5xl">
        ค้นหา
      </SubTitle>

      <div className="mx-4">
        <SearchInput isOpenSearch={isOpenSearch} autoFocus />
      </div>

      <hr />

      <SubTitle className="my-2 pt-3 pl-6 pr-3 pb-7" bold size="lg">
        ล่าสุด
      </SubTitle>

      <div className="h-3/5 flex flex-col justify-center items-center text-gray-500">
        <SubTitle bold gray>
          ไม่มีการค้นหาล่าสุด
        </SubTitle>
      </div>
    </div>
  );
};
