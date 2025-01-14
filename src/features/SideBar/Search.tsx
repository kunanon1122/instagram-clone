import React, { FC, useMemo } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

import type { RootState } from "@/redux/store";

import SubTitle from "@/components/SubTitle";
import Profile from "@/components/Profile";

import SearchInput from "@/features/SearchInput";

interface SearchProps {
  isOpenSearch: boolean;
}

export const Search: FC<SearchProps> = ({ isOpenSearch }) => {
  const searchResult = useSelector(
    (state: RootState) => state.posts.searchResult
  );

  const isEmptyResult = useMemo(
    () => searchResult.length === 0,
    [searchResult]
  );

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

      {isEmptyResult ? (
        <div>
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
      ) : (
        <div className="-mt-3">
          {searchResult.map((result) => (
            <div key={result.id} className="flex px-6 py-2">
              <Profile url={result.url} id={result.id} size="md" />
              <div className="flex flex-col justify-center ml-3 h-9">
                <SubTitle bold truncate className="leading-1.2 w-72">
                  {result.id}
                </SubTitle>
                <SubTitle gray truncate className="leading-1.2 w-72">
                  {result.id} • ผู้ติดตาม{" "}
                  {(result.width || 123).toLocaleString()}K คน
                </SubTitle>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
