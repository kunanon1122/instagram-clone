import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

import { setSearchResult } from "@/redux/reducers/postSlice";

import type { RootState } from "@/redux/store";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { SearchResult } from "@/features/Search";

export type SearchInputProps = {
  className?: string;
  autoFocus?: boolean;
  isOpenSearch?: boolean;
  isMobile?: boolean;
};

const SearchInput: FC<SearchInputProps> = ({
  className,
  autoFocus,
  isOpenSearch,
  isMobile,
}) => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  const [isFocus, setIsFocus] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setTimeout(() => setIsFocus(false), 150);

  const handleSearch = (value: string) => {
    if (!value) {
      dispatch(setSearchResult([]));
      return;
    }
    const result = posts.filter((post) => post.id.includes(value));
    dispatch(setSearchResult(result));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValueSearch(value);
    handleSearch(value);
  };

  const handleClean = () => {
    setValueSearch("");
    dispatch(setSearchResult([]));
  };

  useEffect(() => {
    if (isMobile && isFocus) {
      setOpenMobileSearch(true);
    } else {
      setOpenMobileSearch(false);
    }
  }, [isFocus, isMobile]);

  return (
    <div className="relative">
      {isOpenSearch && (
        <Input
          id="search"
          name="search"
          key="search"
          className={clsx(
            "w-full",
            className,
            isMobile ? "h-9" : "mb-6 h-10",
            isFocus && "px-0 pl-4 pr-10"
          )}
          isMobile={isMobile}
          value={valueSearch}
          placeholder="ค้นหา"
          autoFocus={autoFocus}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          prefix={
            !isFocus && (
              <div className="text-stone-400">
                <svg width="16" height="16" fill="currentColor">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            )
          }
        />
      )}
      {isFocus && (
        <Button
          className="absolute top-2 right-3 text-stone-300"
          onClick={handleClean}
        >
          <svg width="16" height="16" fill="currentColor">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </Button>
      )}
      {openMobileSearch && (
        <div className="absolute bg-white w-72 top-11 -right-6 shadow-box-shadow rounded-lg">
          <SearchResult isMobile />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
