import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import type { RootState } from "@/redux/store";

import Profile from "@/components/Profile";
import SubTitle from "@/components/SubTitle";

export const Navbar = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const breakPoints = useMemo(() => {
    const breakPoints: { [key: number]: { slidesPerView: number } } = {};

    for (let i = 150, slides = 2; i <= 510; i += 60, slides++) {
      breakPoints[i] = { slidesPerView: slides };
    }

    return breakPoints;
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        breakpoints={breakPoints}
        modules={[Navigation]}
        navigation
        slidesPerGroup={4}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <Profile
              key={post.id}
              url={post.url}
              id={post.id}
              size="lg"
              border
            />
            <SubTitle className="text-center" truncate size="sm">
              {post.id}
            </SubTitle>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
