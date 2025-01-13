import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/redux/store";
import { setPosts } from "@/redux/reducers/postSlice";

import { useGetCatsQuery } from "@/services/catApi";
import { useGetDogsQuery } from "@/services/dogApi";

import CardPostMain from "@/features/PostInfinite/CardPostMain";

import { PostDetail } from "@/constant/api";

export const PostInfinite = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);

  const { data: dataCats } = useGetCatsQuery();
  const { data: dataDogs } = useGetDogsQuery();

  const shuffle = (array: PostDetail[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  useEffect(() => {
    if (dataCats && dataDogs) {
      const combinedData = dataCats.concat(dataDogs);
      const shuffledData = shuffle(combinedData);

      dispatch(setPosts(shuffledData));
    }
  }, [dataCats, dataDogs, dispatch]);

  if (!dataCats) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => (
        <CardPostMain key={post.id} post={post} />
      ))}
    </div>
  );
};
