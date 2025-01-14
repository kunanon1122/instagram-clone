import React, { FC, useState } from "react";
import clsx from "clsx";

import Input from "@/components/Input";
import Button from "@/components/Button";

export type SearchInputProps = {
  className?: string;
  autoFocus?: boolean;
  isOpenSearch?: boolean;
};

const SearchInput: FC<SearchInputProps> = ({
  className,
  autoFocus,
  isOpenSearch,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setTimeout(() => setIsFocus(false), 150);

  const handleClean = () => {
    console.log("clean--");
  };

  return (
    <div className="relative">
      {isOpenSearch && (
        <Input
          id="search"
          name="search"
          key="search"
          className={clsx(
            className,
            "mb-6 w-full h-10",
            isFocus && "px-0 pl-4 pr-10"
          )}
          placeholder="ค้นหา"
          autoFocus={autoFocus}
          onChange={() => console.log("ins--")}
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
    </div>
  );
};

export default SearchInput;
