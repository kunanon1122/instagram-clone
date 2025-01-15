import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/redux/store";
import { setPosts } from "@/redux/reducers/postSlice";

import { useGetCatsQuery } from "@/services/catApi";
import { useGetDogsQuery } from "@/services/dogApi";

import SpinnerLoading from "@/components/SpinnerLoading";

import CardPostMain from "@/features/PostInfinite/CardPostMain";

import { PostDetail } from "@/constant/api";

export const PostInfinite = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);

  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const prevPageRef = useRef(page);

  const { data: dataCats } = useGetCatsQuery(page);
  const { data: dataDogs } = useGetDogsQuery(page);

  const shuffle = (array: PostDetail[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 104 ||
      isFetching
    )
      return;

    setIsFetching(true);
    if (prevPageRef.current === page) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        prevPageRef.current = newPage;
        return newPage;
      });
    }
  }, [isFetching, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (dataCats && dataDogs && posts.length > 0) {
      const combinedData = dataCats.concat(dataDogs);
      const shuffledData = shuffle(combinedData);

      setTimeout(() => {
        dispatch(setPosts(posts.concat(shuffledData)));
        setIsFetching(false);
      }, 1500);
    } else if (dataCats && dataDogs) {
      const combinedData = dataCats.concat(dataDogs);
      const shuffledData = shuffle(combinedData);

      dispatch(setPosts(shuffledData));
    }

    // when redux posts is changed, do not want to run this useEffect
    // eslint-disable-next-line
  }, [dataCats, dataDogs, dispatch]);

  if (!dataCats) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post, index) => (
        <CardPostMain key={`${post.id}-${index}`} post={post} />
      ))}
      {isFetching && (
        <div className="w-full flex justify-center mt-10 mb-5">
          <SpinnerLoading />
        </div>
      )}
    </div>
  );
};
