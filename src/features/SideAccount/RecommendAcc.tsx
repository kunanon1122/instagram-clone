import React, { useMemo } from "react";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

import Profile from "@/components/Profile";
import SubTitle from "@/components/SubTitle";

export const RecommendAcc = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const fiveAcc = useMemo(() => {
    const postsReverse = [...posts].reverse();
    return postsReverse.slice(0, 5);
  }, [posts]);

  if (!fiveAcc) return <div>loading...</div>;

  return (
    <div>
      {fiveAcc.map((post) => (
        <div key={post.id} className="flex justify-between py-2">
          <div className="flex">
            <Profile url={post.url} id={post.id} size="md" />
            <div className="flex flex-col justify-center ml-3">
              <SubTitle bold truncate className="leading-1.2 w-36">
                {post.id}
              </SubTitle>
              <SubTitle gray truncate className="leading-1.2 w-36">
                ติดตามโดย {post.id} และคนอื่นๆ
              </SubTitle>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <SubTitle bold size="sm" className="text-blue-500">
              ติดตาม
            </SubTitle>
          </div>
        </div>
      ))}
    </div>
  );
};
