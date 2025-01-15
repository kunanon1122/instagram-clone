import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import type { RootState } from "@/redux/store";

import SubTitle from "@/components/SubTitle";
import Profile from "@/components/Profile";

export type SearchResultProps = {
  isMobile?: boolean;
};

const SearchResult: FC<SearchResultProps> = ({ isMobile }) => {
  const searchResult = useSelector(
    (state: RootState) => state.posts.searchResult
  );

  const isEmptyResult = useMemo(
    () => searchResult.length === 0,
    [searchResult]
  );

  return (
    <div className={clsx(isMobile && "min-h-52")}>
      {isEmptyResult && (
        <div>
          {!isMobile && <hr />}

          <SubTitle
            className={clsx(
              isMobile ? "py-3 px-3" : "my-2 pt-3 pl-6 pr-3 pb-7"
            )}
            bold
            size="lg"
          >
            ล่าสุด
          </SubTitle>
          <div className="h-3/5 flex flex-col justify-center items-center text-gray-500">
            <SubTitle bold gray className={clsx(isMobile && "mt-10")}>
              ไม่มีการค้นหาล่าสุด
            </SubTitle>
          </div>
        </div>
      )}
      {!isEmptyResult && (
        <div
          className={clsx(
            "overflow-y-auto overflow-x-hidden",
            isMobile ? "max-h-96" : "-mt-3 h-[calc(100vh-150px)]"
          )}
        >
          {searchResult.map((result, index) => (
            <div
              key={`${result.id}-${index}`}
              className={clsx("flex py-2", isMobile ? "px-3" : "px-6")}
            >
              <Profile url={result.url} id={result.id} size="md" />
              <div className="flex flex-col justify-center ml-3">
                <SubTitle
                  bold
                  truncate
                  className={clsx("leading-1.2", isMobile ? "w-48" : "w-72")}
                >
                  {result.id}
                </SubTitle>
                <SubTitle
                  gray
                  truncate
                  className={clsx("leading-1.2", isMobile ? "w-48" : "w-72")}
                >
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

export default SearchResult;
