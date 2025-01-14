import React from "react";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

import Profile from "@/components/Profile";
import SubTitle from "@/components/SubTitle";

export const MyAccount = () => {
  const count = useSelector((state: RootState) => state.posts.posts);

  if (!count[0]) return <div>loading...</div>;

  return (
    <div key={count[0].id} className="flex justify-between">
      <div className="flex">
        <Profile url={count[0].url} id={count[0].id} size="md" />
        <div className="flex flex-col justify-center ml-3">
          <SubTitle bold truncate className="leading-1.2 w-36">
            {count[0].id}
          </SubTitle>
          <SubTitle gray truncate className="leading-1.2 w-36">
            {count[0].id}
          </SubTitle>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <SubTitle bold size="sm" className="text-blue-500">
          เปลี่ยน
        </SubTitle>
      </div>
    </div>
  );
};
