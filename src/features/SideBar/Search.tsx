import React, { FC } from "react";
import clsx from "clsx";

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
      <div>Search Detail</div>
    </div>
  );
};
